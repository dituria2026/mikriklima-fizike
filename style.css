
:root{
  --bg:#0b1220;
  --card:#0f1a2e;
  --card2:#0c1628;
  --text:#eaf0ff;
  --muted:#a9b4d0;
  --border: rgba(255,255,255,.10);
  --shadow: 0 10px 30px rgba(0,0,0,.35);
}
*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
  background: radial-gradient(1200px 700px at 20% 0%, rgba(66,126,255,.18), transparent 60%),
              radial-gradient(900px 600px at 90% 10%, rgba(255,196,0,.12), transparent 55%),
              var(--bg);
  color: var(--text);
}
.topbar{
  position: sticky; top:0;
  display:flex; align-items:center; justify-content:space-between;
  padding:14px 18px;
  border-bottom:1px solid var(--border);
  backdrop-filter: blur(10px);
  background: rgba(11,18,32,.65);
  z-index: 5;
}
.brand{display:flex; gap:12px; align-items:center}
.logo{
  width:44px;height:44px;border-radius:14px;
  display:grid;place-items:center;
  background: linear-gradient(135deg, rgba(255,255,255,.12), rgba(255,255,255,.02));
  border:1px solid var(--border);
  box-shadow: var(--shadow);
  font-size:22px;
}
h1{margin:0;font-size:18px;letter-spacing:.2px}
.muted{color:var(--muted);margin:4px 0 0}
.nav{display:flex; gap:10px; align-items:center}
.nav a{
  text-decoration:none; color: var(--muted);
  padding:8px 10px; border-radius:10px;
  border:1px solid transparent;
}
.nav a:hover{border-color:var(--border); color: var(--text)}
.nav a.active{color: var(--text); border-color: var(--border); background: rgba(255,255,255,.06)}
.layout{
  display:grid;
  grid-template-columns: 320px 1fr;
  gap:16px;
  padding:16px;
}
.panel, .chart-card, .card{
  background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
  border:1px solid var(--border);
  border-radius:18px;
  box-shadow: var(--shadow);
}
.panel{padding:14px}
.panel h2{margin:0 0 10px}
.field{display:grid; gap:6px; margin-bottom:12px}
select{
  width:100%;
  padding:10px 12px;
  border-radius:12px;
  border:1px solid var(--border);
  background: rgba(0,0,0,.25);
  color: var(--text);
  outline:none;
}
.legend{padding:10px 0}
.legend h3{margin:0 0 8px; font-size:14px; color: var(--muted)}
.legend-item{display:flex; align-items:center; gap:10px; margin:6px 0; color: var(--text)}
.dot{width:12px; height:12px; border-radius:999px; display:inline-block}
.dot.green{background:#35d07f}
.dot.yellow{background:#ffc44c}
.dot.red{background:#ff5d5d}
.card{padding:12px; margin-top:12px; background: rgba(0,0,0,.12)}
.card h3{margin:0 0 6px; font-size:14px}
.mapwrap{
  border-radius:18px;
  overflow:hidden;
  border:1px solid var(--border);
  box-shadow: var(--shadow);
  background: rgba(0,0,0,.15);
}
#map{height: calc(100vh - 110px); min-height:520px}
.map-footer{
  padding:10px 12px;
  border-top:1px solid var(--border);
  background: rgba(11,18,32,.55);
  font-size:12px;
}
code{color:#c9d6ff}
.charts{
  display:grid;
  grid-template-columns: repeat(2, minmax(0,1fr));
  gap:16px;
  padding:16px;
}
.chart-card{padding:14px}
.chart-head h2{margin:0 0 6px; font-size:16px}
.chart-head p{margin:0 0 10px}
.about{padding:16px; display:grid; gap:16px; max-width:980px}
@media (max-width: 960px){
  .layout{grid-template-columns:1fr}
  #map{height: 65vh}
  .charts{grid-template-columns:1fr}
}

.custom-marker{background:transparent;border:none}
.pin{
  width:18px;height:18px;border-radius:999px;
  border:2px solid rgba(255,255,255,.85);
  box-shadow: 0 10px 20px rgba(0,0,0,.35);
}
.pin.green{background:#35d07f}
.pin.yellow{background:#ffc44c}
.pin.red{background:#ff5d5d}
