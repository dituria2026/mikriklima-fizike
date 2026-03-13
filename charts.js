function loadData(){
  if (!window.MICROKLIMA_DATA) throw new Error('Data not loaded: MICROKLIMA_DATA');
  return Promise.resolve(window.MICROKLIMA_DATA);
}

function makeLine(ctx, labels, dataArr, label){
  return new Chart(ctx, {
    type: 'line',
    data: { labels, datasets: [{ label, data: dataArr, tension: .25 }] },
    options: {
      responsive:true,
      plugins:{ legend:{ display:true }},
      scales:{ y:{ beginAtZero:false } }
    }
  });
}

function makeBar(ctx, labels, dataArr, label){
  return new Chart(ctx, {
    type: 'bar',
    data: { labels, datasets: [{ label, data: dataArr }] },
    options: {
      responsive:true,
      plugins:{ legend:{ display:true }},
      scales:{ y:{ beginAtZero:true } }
    }
  });
}

(async function(){
  const d = await loadData();
  document.getElementById('period').textContent = d.meta.period;

  // Temp vs Time (avg overall)
  const timeLabels = d.agg.time.map(x=>x.Ora);
  makeLine(
    document.getElementById('cTempTime'),
    timeLabels,
    d.agg.time.map(x=>Number(x.temp.toFixed(2))),
    'Temperatura mesatare (°C)'
  );

  // Temp vs Zone
  const zoneLabels = d.agg.zone.map(x=>x.Zona);
  makeBar(
    document.getElementById('cTempZone'),
    zoneLabels,
    d.agg.zone.map(x=>Number(x.temp.toFixed(2))),
    'Temperatura mesatare (°C)'
  );

  // Wind vs Zone
  makeBar(
    document.getElementById('cWindZone'),
    zoneLabels,
    d.agg.zone.map(x=>Number(x.wind.toFixed(2))),
    'Era mesatare (m/s)'
  );

  // Radiation vs Zone
  makeBar(
    document.getElementById('cRadZone'),
    zoneLabels,
    d.agg.zone.map(x=>Number(x.rad.toFixed(2))),
    'Rrezatimi mesatar (1–10)'
  );

  // Comfort total (bar)
  makeBar(
    document.getElementById('cComfort'),
    zoneLabels,
    d.agg.zone.map(x=>Number(x.comfort.toFixed(1))),
    'Komforti total (0–100)'
  );
})();
