/* projectsScreen.js
   Contains the projects screen DOM, styles and wiring.
   Tombstone: this module replaces the large showProjectsScreen() block previously in screens.js
*/

import { setupMenu } from './menu.js';
import { showSecondScreen } from './secondScreen.js';

export function showProjectsScreen() {
  document.body.innerHTML = `
    <nav class="navbar">
      <div class="logo">&lt;<span class="surtado">Surtado</span>Dev/&gt;</div>
      <div class="hamburger" id="hamburger" aria-label="Menu" role="button" tabindex="0">
        <i class="fas fa-bars"></i>
      </div>
    </nav>

    <main class="proj-main">
      <div class="proj-filters" role="tablist" aria-label="Filtros de projetos">
        <button class="filter active" data-filter="all">Todos</button>
        <button class="filter" data-filter="site">Sites</button>
        <button class="filter" data-filter="gm">GM</button>
        <button class="filter" data-filter="aplicativo">Aplicativos</button>
        <button class="filter" data-filter="mapping">Mappings</button>
      </div>

      <div class="proj-grid">
        <!-- Project: Nexus (with thumbnail above title) -->
        <div class="card" data-category="site">
          <div class="topo">
            <div class="bolinha vermelha"></div>
            <div class="bolinha amarela"></div>
            <div class="bolinha verde"></div>
            <div class="barra"></div>
          </div>

          <div class="conteudo">
            <div class="thumb">
              <img src="/projetos/projeto1.jpg" alt="Nexus thumbnail">
            </div>
            <div class="titulo">Drank Hud</div>
            <div class="descricao">Fiz esse site pra um cliente ta top.</div>
            <div class="tags"><div class="tag-cat">Site</div></div>
            <div class="rodape">
              <div class="tag">HTML/JS/CSS</div>
              <a href="#" class="visitar">Visitar <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>

        <!-- Additional projects (no topo bolinhas) -->
        <div class="card" data-category="site">
          <div class="conteudo">
            <div class="thumb">
              <img src="/projetos/projeto2.jpg" alt="Project thumbnail">
            </div>
            <div class="titulo">Orbit</div>
            <div class="descricao">Landing page interativa para produto SaaS.</div>
            <div class="tags"><div class="tag-cat">Site</div></div>
            <div class="rodape">
              <div class="tag">React</div>
              <a href="#" class="visitar">Visitar <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>

        <div class="card" data-category="aplicativo">
          <div class="conteudo">
            <div class="thumb">
              <img src="/pasta.png" alt="Project thumbnail">
            </div>
            <div class="titulo">Tracker</div>
            <div class="descricao">Aplicativo leve para rastreamento de tarefas.</div>
            <div class="tags"><div class="tag-cat">Aplicativos</div></div>
            <div class="rodape">
              <div class="tag">Node</div>
              <a href="#" class="visitar">Visitar <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>

        <div class="card" data-category="gm">
          <div class="conteudo">
            <div class="thumb">
              <img src="/pasta.png" alt="GM project thumbnail">
            </div>
            <div class="titulo">GM Toolkit</div>
            <div class="descricao">Coleção de utilitários para Game Maker Studio.</div>
            <div class="tags"><div class="tag-cat">GM</div></div>
            <div class="rodape">
              <div class="tag">GML</div>
              <a href="#" class="visitar">Visitar <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>

        <div class="card" data-category="mapping">
          <div class="conteudo">
            <div class="thumb">
              <img src="/seta-direita.png" alt="Mapping project thumbnail">
            </div>
            <div class="titulo">Mapper</div>
            <div class="descricao">Ferramenta de mapeamento e visualização de dados geoespaciais.</div>
            <div class="tags"><div class="tag-cat">Mappings</div></div>
            <div class="rodape">
              <div class="tag">Leaflet</div>
              <a href="#" class="visitar">Visitar <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>

        <!-- extra example project -->
        <div class="card" data-category="site">
          <div class="conteudo">
            <div class="thumb">
              <img src="/pasta.png" alt="Extra project thumbnail">
            </div>
            <div class="titulo">Portfolio Lite</div>
            <div class="descricao">Portfólio simples e responsivo para freelancers.</div>
            <div class="tags"><div class="tag-cat">Site</div></div>
            <div class="rodape">
              <div class="tag">HTML/CSS</div>
              <a href="#" class="visitar">Visitar <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>

      </div>

    </main>
  `;

  const style = document.createElement('style');
  style.textContent = `/* styles for projects screen */
    :root{ --bg:#000; --card:#0f172a; --muted:#9ca3af; --accent:#60a5fa; --red:#e11; --safe-padding:env(safe-area-inset-top,16px) }
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
    /* apply Orbitron (same font used on the Entrar screen) to the Surtado name and hamburger and dropdown items */
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
      /* keep desktop layout unchanged; small-screen scrolling is added via media query */
    }
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
    /* default active style (muted) */
    .filter.active{ background:rgba(255,255,255,0.04); box-shadow: inset 0 -2px 6px rgba(0,0,0,0.6); }
    /* keep "Todos" visually red when active */
    .filter[data-filter="all"].active,
    .filter[data-filter="all"]{
      background:var(--red);
      color:#111;
      box-shadow: 0 6px 18px rgba(225,17,17,0.14), inset 0 -3px 6px rgba(0,0,0,0.12);
    }
    .proj-grid{ display:flex; gap:18px; flex-wrap:wrap; justify-content:center; padding:12px; width:100%; }
    .card{ width:350px; background:var(--card); border-radius:20px; overflow:hidden; box-shadow:0 0 40px rgba(0,0,0,0.6); border:1px solid rgba(255,255,255,0.08); display:flex; flex-direction:column; }
    .topo{ display:flex; align-items:center; padding:12px; background:rgba(255,255,255,0.03); }
    .bolinha{ width:12px; height:12px; border-radius:50%; margin-right:6px; }
    .vermelha{ background:#ff5f56; } .amarela{ background:#ffbd2e; } .verde{ background:#27c93f; }
    .barra{ flex:1; height:12px; background:rgba(255,255,255,0.05); border-radius:6px; margin-left:10px; }
    .conteudo{ padding:20px; color:white; display:flex; flex-direction:column; align-items:flex-start; }
    .thumb{ width:100%; display:flex; justify-content:center; margin-bottom:12px; }
    .thumb img{ width:100%; max-width:300px; height:auto; border-radius:12px; object-fit:cover; border:1px solid rgba(255,255,255,0.04); background:rgba(255,255,255,0.02); }
    .titulo{ font-size:20px; font-weight:700; margin-bottom:8px; }
    .descricao{ font-size:14px; color:var(--muted); margin-bottom:12px; }
    .tags{ margin-bottom:12px; }
    .tag-cat{ display:inline-block; background:rgba(255,255,255,0.04); color:#fff; padding:6px 10px; border-radius:12px; font-size:13px; font-weight:700; }
    .rodape{ display:flex; justify-content:space-between; align-items:center; width:100%; gap:12px; }
    .tag{ background:#0f3d1f; color:#22c55e; padding:8px 14px; border-radius:20px; font-size:13px; font-weight:600; }
    .visitar{ color:white; text-decoration:none; font-weight:600; display:flex; align-items:center; gap:8px; transition:0.18s; }
    .visitar:hover{ transform:translateX(4px); color:var(--accent); }
    
    /* dropdown styling for projects screen */
    .dropdown{
      position: absolute;
      top: calc(100% + 8px);
      right: 6%;
      background: #070707;
      border-radius:12px;
      padding:8px;
      display:flex;
      flex-direction:column;
      gap:6px;
      min-width:160px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.6);
      opacity:0;
      transform: translateY(-8px) scale(0.98);
      pointer-events:none;
      transition: all 180ms ease;
      z-index:40;
    }
    .dropdown.open{ opacity:1; transform: translateY(0) scale(1); pointer-events:auto; }
    .dropdown .item{ color:#fff; padding:10px 12px; border-radius:8px; text-decoration:none; font-size:14px; cursor:pointer; background:transparent; }
    .dropdown .item.active{ color:var(--red); font-weight:700; background: transparent; }
    .dropdown .item:hover{ background: rgba(255,255,255,0.02); color:var(--red); }

    /* Small/mobile screens: enable a contained scrolling area for projects without changing desktop */
    @media (max-width:420px){
      .card{ width:320px }
      .proj-main{
        margin-top:70px;
        /* constrain height so the content can scroll inside the main area */
        max-height: calc(100vh - 90px);
        overflow-y: auto;
        padding-right: 12px; /* space for touch scroll */
        -webkit-overflow-scrolling: touch;
      }
      /* slightly adjust floating for smaller devices */
    }
  `;
  document.head.appendChild(style);

  // wire navbar menu for this screen too
  setupMenu();

  // filtering: show/hide project cards based on button data-filter
  const filters = Array.from(document.querySelectorAll('.filter'));
  const cards = Array.from(document.querySelectorAll('.card'));

  function applyFilter(filter) {
    cards.forEach(card => {
      const cat = (card.getAttribute('data-category') || '').toLowerCase();
      if (filter === 'all' || filter === '' ) {
        card.style.display = '';
      } else {
        card.style.display = (cat === filter) ? '' : 'none';
      }
    });
  }

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = (btn.getAttribute('data-filter') || '').toLowerCase();
      applyFilter(filter);
    });
  });

  // ensure initial state matches the active filter (default: all)
  const activeBtn = document.querySelector('.filter.active');
  if (activeBtn) applyFilter((activeBtn.getAttribute('data-filter') || 'all').toLowerCase());

  
}