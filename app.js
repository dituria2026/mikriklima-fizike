function loadData(){
  if (!window.MICROKLIMA_DATA) throw new Error('Data not loaded: MICROKLIMA_DATA');
  return Promise.resolve(window.MICROKLIMA_DATA);
}

function categoryFromComfort(c){
  if (c >= 70) return 'green';
  if (c >= 45) return 'yellow';
  return 'red';
}

function avgForZoneTime(zone, time, data){
  const rows = data.agg.zone_time.filter(r => r.Zona === zone && r.Ora === time);
  if(!rows.length) return null;
  return rows[0];
}

function bestTimeForZone(zone, data){
  return data.best_times[zone] || data.times[0];
}

function popupHtml(zone, time, row, data){
  const best = bestTimeForZone(zone, data);
  const c = row ? row.comfort : null;
  const cat = c==null ? 'yellow' : categoryFromComfort(c);
  return `
    <div class="popup">
      <div style="display:flex; gap:10px; align-items:center;">
        <div style="width:10px;height:10px;border-radius:999px;background:${cat==='green'?'#35d07f':cat==='yellow'?'#ffc44c':'#ff5d5d'}"></div>
        <b>${zone}</b>
      </div>
      <div style="margin-top:6px;font-size:12px;color:#a9b4d0;">
        Ora e zgjedhur: <b>${time}</b> · Ora më e mirë: <b>${best}</b>
      </div>
      ${row ? `
      <div style="margin-top:10px; display:grid; gap:6px; font-size:13px;">
        <div>🌡 Temp mesatare: <b>${row.temp.toFixed(1)}°C</b></div>
        <div>🌬 Era mesatare: <b>${row.wind.toFixed(2)} m/s</b></div>
        <div>☀ Rrezatim mesatar: <b>${row.rad.toFixed(1)} / 10</b></div>
        <div>✅ Komforti: <b>${row.comfort.toFixed(1)} / 100</b></div>
      </div>` : `<div style="margin-top:10px;color:#a9b4d0;">Nuk u gjetën të dhëna për këtë orë.</div>`}
      <div style="margin-top:10px;font-size:12px;color:#a9b4d0;">
        (Bazuar në të dhënat e Excel-it – orientuese)
      </div>
    </div>
  `;
}

(async function init(){
  const data = await loadData();
  document.getElementById('period').textContent = data.meta.period;

  // Fill time select
  const sel = document.getElementById('timeSelect');
  data.times.forEach(t=>{
    const opt = document.createElement('option');
    opt.value = t;
    opt.textContent = t;
    sel.appendChild(opt);
  });
  sel.value = data.times[0];

  // Map init
  const map = L.map('map', {scrollWheelZoom:true}).setView([42.06, 19.51], 12.8);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const markers = [];
  function updateMarkers(){
    const t = sel.value;
    markers.forEach(m => map.removeLayer(m));
    markers.length = 0;

    data.zone_points.forEach(p=>{
      const row = avgForZoneTime(p.zone, t, data);
      const c = row ? row.comfort : 55;
      const cat = categoryFromComfort(c);

      const icon = L.divIcon({
        className: 'custom-marker',
        html: `<div class="pin ${cat}"></div>`,
        iconSize: [24,24],
        iconAnchor: [12,12]
      });

      const m = L.marker([p.lat, p.lng], {icon}).addTo(map);
      m.bindPopup(popupHtml(p.zone, t, row, data), {maxWidth: 300});
      markers.push(m);
    });
  }

  sel.addEventListener('change', updateMarkers);
  updateMarkers();
})();
