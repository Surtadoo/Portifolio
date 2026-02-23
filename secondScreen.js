/* secondScreen.js
   Contains the "second / entry" screen DOM, styles and local wiring.
   Tombstone: this module replaces the large showSecondScreen() block previously in screens.js
*/

import { setupMenu } from './menu.js';
import { showProjectsScreen } from './projectsScreen.js';
import { showAboutScreen } from './aboutScreen.js';

export function showSecondScreen() {
  // ensure fonts/icons are present (screens.initScreens already preloaded but safe to call)
  document.head.querySelectorAll('link[data-secondscreen]').length || null;

  document.body.innerHTML = `
    <nav class="navbar">
      <div class="logo">&lt;SurtadoDev/&gt;</div>
      <div class="hamburger" id="hamburger" aria-label="Menu" role="button" tabindex="0">
        <i class="fas fa-bars"></i>
      </div>
    </nav>

    <main class="header-wrap">
      <div class="avatar-container" role="img" aria-label="Avatar">
        <div class="avatar">
          <i class="fas fa-user-astronaut"></i>
        </div>
      </div>

      <div class="caption">Bem-vindo ao site — explorando ideias, código e paixão.</div>

      <div class="actions">
        <button class="action-btn" id="projBtn">
        <span>Ver Projetos</span>
          <img src="/pasta.png" alt="pasta" class="icon">
        </button>

        <button class="action-btn" id="aboutBtn">
        <span>Sobre</span>
          <img src="/seta-direita.png" alt="seta" class="icon rotate">
        </button>
      </div>

      <div class="icons" aria-hidden="true">
        <i class="devicon-python-plain"></i>
        <i class="devicon-javascript-plain"></i>
        <i class="devicon-html5-plain"></i>
        <i class="fas fa-cogs"></i>
      </div>
    </main>

    <footer class="footer-note" aria-hidden="true">
      © Copyright © 2024-2025 Portifolio Do Surtado. Todos os direitos reservados.
      <br>
      Criador & Development do Site: <span class="surtado">𝕾𝖚𝖗𝖙𝖆𝖉𝖔</span>
    </footer>
  `;

  const s = document.createElement('style');
  s.textContent = `/* styles for second screen */
    :root{
      --bg:#000;
      --red:#e11;
      --muted:rgba(255,255,255,0.12);
      --safe-padding:env(safe-area-inset-top,16px);
    }
    html,body{height:100%}
    body{
      margin:0;
      background:var(--bg);
      font-family:'Orbitron', sans-serif;
      color:#fff;
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
      display:flex;
      flex-direction:column;
      align-items:center;
      min-height:100vh;
      padding-top: calc( clamp(56px, 8vh, 92px) + var(--safe-padding) );
      box-sizing: border-box;
    }
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
    .header-wrap{
      width:100%;
      max-width:1100px;
      margin: clamp(18px,4vh,48px) auto;
      display:flex;
      flex-direction:column;
      align-items:center;
      gap: clamp(12px,2.4vh,28px);
      padding: 0 18px;
      box-sizing:border-box;
      position:relative;
    }
    .avatar-container{ width:100%; display:flex; justify-content:center; align-items:center; margin-top:-140px; }
    .avatar{ width:160px; height:160px; background: #e11; border-radius:50%; display:flex; justify-content:center; align-items:center; animation: flutuar 3s ease-in-out infinite; box-shadow:0 0 32px rgba(255,0,0,0.6); }
    .avatar i{ font-size:90px; color:#fff; }
    .caption{ margin-top:-12px; color:rgba(255,255,255,0.9); font-size:16px; text-align:center; max-width:80%; }
    .actions{ position:static; display:flex; flex-direction:row; gap:12px; justify-content:center; align-items:center; margin-top:12px; width:100%; box-sizing:border-box; padding: 0 18px; flex-wrap:wrap; }
    .action-btn{ display:flex; align-items:center; gap:8px; background: linear-gradient(180deg,var(--red),#b00); color:#111; border:0; padding:8px 14px; border-radius:12px; font-weight:700; font-size:14px; cursor:pointer; box-shadow: 0 8px 30px rgba(225,17,17,0.18); min-width:120px; max-width:200px; width:auto; align-items:center; justify-content:center; }
    .action-btn .icon{ width:22px; height:22px; object-fit:contain; filter: none; }
    .action-btn .rotate{ transform: rotate(0deg); }
    .action-btn:active{ transform: translateY(2px) }
    @keyframes flutuar{ 0%{ transform: translateY(0px); } 50%{ transform: translateY(-36px); } 100%{ transform: translateY(0px); } }
    .icons{ display:flex; justify-content:center; gap:36px; margin-top:28px; }
    .icons i{ font-size:40px; color:#bfbfbf; transition:0.2s; }
    .icons i:hover{ color:white; transform:scale(1.15); }
    .footer-note{ position: fixed; left: 50%; transform: translateX(-50%); bottom: calc(12px + env(safe-area-inset-bottom,12px)); width: min(980px, 92%); color:rgba(255,255,255,0.6); font-size:13px; text-align:center; line-height:1.3; opacity:0.95; padding:10px 14px; pointer-events: none; z-index: 900; backdrop-filter: none; background: transparent; }
    .footer-note .surtado{ color: #fff; font-weight:700; display:inline-block; margin-left:6px; }
    @media (max-width:420px){
      .navbar{ padding:8px 12px; border-radius:24px; top: calc(8px + var(--safe-padding)); }
      .menu a{ padding:8px 10px; }
      .header-wrap{ margin-top:4px; }
      .avatar{ width:120px; height:120px; }
      .avatar i{ font-size:48px; }
      .avatar-container{ margin-top:-120px; }
      .caption{ font-size:14px; margin-top:-6px; max-width:88%; }
      .actions{ flex-direction:row; gap:10px; margin-top:8px; padding: 0 12px; align-items:center; justify-content:center; flex-wrap:wrap; }
      .action-btn{ min-width:120px; padding:8px 12px; font-size:13px; width:auto; max-width:200px; }
      .action-btn .icon{ width:18px; height:18px; }
      .icons{ gap:28px; margin-top:28px; }
      .icons i{ font-size:36px; }
      .footer-note{ font-size:12px; padding:8px 10px; color:rgba(255,255,255,0.65); bottom: calc(8px + env(safe-area-inset-bottom,8px)); }
      @keyframes flutuar{ 0%{ transform: translateY(0px); } 50%{ transform: translateY(-20px); } 100%{ transform: translateY(0px); } }
    }
  `;
  document.head.appendChild(s);

  setupMenu();
  wireActionButtons();

  // respond to generic menu selections from the shared menu module
  const onMenuSelect = (e) => {
    const name = (e.detail || '').toString().toLowerCase();
    if (name === 'inicio') {
      // go back to the second (entry) screen with the "Ver Projetos / Sobre" buttons
      showSecondScreen();
    }
  };
  document.addEventListener('menu:select', onMenuSelect);
}

function wireActionButtons() {
  const proj = document.getElementById('projBtn');
  const about = document.getElementById('aboutBtn');

  if (about) {
    about.addEventListener('click', (e) => {
      e.preventDefault();
      showAboutScreen();
    });
  }

  if (proj) {
    proj.addEventListener('click', (e) => {
      e.preventDefault();
      showProjectsScreen();
    });
  }
}