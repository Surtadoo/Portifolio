/* projectsStyles.js
   Extracted CSS for the projects screen so JS stays focused on behavior.
   This module injects a <style> tag into the document head.

   QUICK NOTES FOR LAYOUT & CARD SIZING
   - Grid: .proj-grid uses two columns on desktop (grid-template-columns: repeat(2, minmax(0, 1fr))).
     To show 3 columns change this to repeat(3, minmax(0, 1fr)) and ensure card min-width works for your viewport.
   - Card height: .card has min-height:360px to keep cards visually consistent. If you need taller cards, override here.
   - Thumbnail sizing: .thumb img height is set to 220px and object-fit:cover. Use images with sufficient resolution to avoid blurriness.
   - Mobile: media query switches .proj-grid to 1 column; this keeps cards stacked vertically and full-width.
   - Scroll: .proj-main has max-height and overflow-y:auto so content scrolls inside the projects view on desktop.
*/

const css = `:root{ --bg:#000; --card:#0f172a; --muted:#9ca3af; --accent:#60a5fa; --red:#e11; --safe-padding:env(safe-area-inset-top,16px) }
html,body{height:100%}
body{margin:0;background:var(--bg);color:#fff;font-family:Inter, Poppins, system-ui, sans-serif;display:flex;flex-direction:column;align-items:center; padding:24px; box-sizing:border-box;}
.navbar{
  position: fixed;
  top: calc(12px + var(--safe-padding));
  left: 50%;
  transform: translateX(-50%);
  width: min(1080px, 92%);
  margin: 0;
  padding: 10px 18px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  background: rgba(40,40,40,0.6);
  backdrop-filter: blur(12px);
  border-radius:32px;
  border:1px solid rgba(255,255,255,0.06);
  z-index: 1000;
}
.navbar .logo{ color:#fff; font-weight:800; font-size:clamp(18px,2.4vw,28px); letter-spacing:1px; }
.hamburger{
  --red: #e11;
  width:44px;
  height:44px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:10px;
  background: rgba(255,255,255,0.03);
  color:var(--red);
  cursor:pointer;
  font-size:18px;
  transition: background 160ms ease, color 160ms ease, transform 90ms ease;
}
.hamburger:active{ transform: scale(0.98); }
.hamburger.open{ background: #0b0b0b; color: var(--red); box-shadow: 0 6px 18px rgba(0,0,0,0.6); }
.surtado{ font-family: 'Orbitron', sans-serif; font-weight:800; color:#fff; }
.hamburger{ font-family: 'Orbitron', sans-serif; }
.dropdown .item{ font-family: 'Orbitron', sans-serif; }
.proj-main{
  width:100%;
  max-width:980px;
  margin-top:86px;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:18px;
  max-height: calc(100vh - 160px);
  overflow-y: auto;
  padding-right: 12px;
  -webkit-overflow-scrolling: touch;
}
.proj-main::-webkit-scrollbar{ width:10px; height:10px }
.proj-main::-webkit-scrollbar-track{ background: transparent }
.proj-main::-webkit-scrollbar-thumb{ background: rgba(255,255,255,0.06); border-radius:10px }
.proj-main::-webkit-scrollbar-thumb:hover{ background: rgba(255,255,255,0.1) }
.proj-filters{ display:flex; gap:10px; flex-wrap:wrap; justify-content:center; }
.filter{
  background:var(--red);
  color:#111;
  padding:8px 12px;
  border-radius:999px;
  border:1px solid rgba(0,0,0,0.12);
  cursor:pointer;
  font-weight:700;
  font-family: 'Orbitron', sans-serif;
  box-shadow: 0 6px 18px rgba(225,17,17,0.14), inset 0 -3px 6px rgba(0,0,0,0.12);
}
.filter.active{ background:rgba(255,255,255,0.04); box-shadow: inset 0 -2px 6px rgba(0,0,0,0.6); }
.filter[data-filter="all"].active, .filter[data-filter="all"]{ background:var(--red); color:#111; box-shadow: 0 6px 18px rgba(225,17,17,0.14), inset 0 -3px 6px rgba(0,0,0,0.12); }
.proj-grid{ display:grid; gap:18px; padding:12px; width:100%; grid-template-columns: repeat(2, minmax(0, 1fr)); align-items:start; justify-items:stretch; }
.card{ width:100%; max-width:100%; background:var(--card); border-radius:20px; overflow:hidden; box-shadow:0 0 40px rgba(0,0,0,0.6); border:1px solid rgba(255,255,255,0.08); display:flex; flex-direction:column; align-self:stretch; min-height:360px; }
.topo{ display:flex; align-items:center; padding:12px; background:rgba(255,255,255,0.03); }
.bolinha{ width:12px; height:12px; border-radius:50%; margin-right:6px; }
.vermelha{ background:#ff5f56; } .amarela{ background:#ffbd2e; } .verde{ background:#27c93f; }
.barra{ flex:1; height:12px; background:rgba(255,255,255,0.05); border-radius:6px; margin-left:10px; }
.conteudo{ padding:20px; color:white; display:flex; flex-direction:column; align-items:flex-start; flex:1; }
.thumb{ width:calc(100% + 40px); margin-left:-20px; margin-bottom:12px; overflow:hidden; display:block; }
.thumb img{ display:block; width:100%; height:220px; object-fit:cover; object-position: center top; border-radius:0 0 12px 12px; border:0; background:rgba(255,255,255,0.02); transform: translateY(-4px); }
.titulo{ font-size:20px; font-weight:700; margin-bottom:8px; }
.descricao{ font-size:14px; color:var(--muted); margin-bottom:12px; }
.tags{ margin-bottom:12px; }
.tag-cat{ display:inline-block; background:rgba(255,255,255,0.04); color:#fff; padding:6px 10px; border-radius:12px; font-size:13px; font-weight:700; }
.rodape{ display:flex; justify-content:space-between; align-items:center; width:100%; gap:12px; }
.tag{ background:#0f3d1f; color:#22c55e; padding:8px 14px; border-radius:20px; font-size:13px; font-weight:600; }
.visitar{ color:white; text-decoration:none; font-weight:600; display:flex; align-items:center; gap:8px; transition:0.18s; }
.visitar:hover{ transform:translateX(4px); color:var(--accent); }

/* status pill - placed above the .rodape; show online/offline */
.status{
  display:inline-block;
  font-weight:700;
  font-size:12px;
  padding:6px 10px;
  border-radius:12px;
  margin-bottom:10px;
  text-transform:uppercase;
  letter-spacing:0.6px;
}
.status.online{ background: rgba(39,201,63,0.12); color: #27c93f; border:1px solid rgba(39,201,63,0.18); }
.status.offline{ background: #FF0000; color: #fff; border:1px solid rgba(255,0,0,0.2); }

/* ensure status sits visually above the footer even when footer is flexed */
.rodape + .status{ order: 1; }
.dropdown{ position: absolute; top: calc(100% + 8px); right: 6%; background: #070707; border-radius:12px; padding:8px; display:flex; flex-direction:column; gap:6px; min-width:160px; box-shadow: 0 10px 40px rgba(0,0,0,0.6); opacity:0; transform: translateY(-8px) scale(0.98); pointer-events:none; transition: all 180ms ease; z-index:40; }
.dropdown.open{ opacity:1; transform: translateY(0) scale(1); pointer-events:auto; }
.dropdown .item{ color:#fff; padding:10px 12px; border-radius:8px; text-decoration:none; font-size:14px; cursor:pointer; background:transparent; }
.dropdown .item.active{ color:var(--red); font-weight:700; background: transparent; }
.dropdown .item:hover{ background: rgba(255,255,255,0.02); color:var(--red); }
@media (max-width:420px){
  .proj-grid{ grid-template-columns: 1fr; gap:14px; padding:8px; }
  .card{ width:100%; max-width:100%; }
  .proj-main{ margin-top:70px; max-height: calc(100vh - 90px); overflow-y: auto; padding-right: 12px; -webkit-overflow-scrolling: touch; }
}
`;

const el = document.createElement('style');
el.setAttribute('data-module','projects-styles');
el.textContent = css;
document.head.appendChild(el);