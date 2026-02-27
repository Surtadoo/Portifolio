/* partnershipScreen.js
   New: renders "Parcerias" screen per user request.
   - Black background, red buttons, white text.
   - Header shows "SurtadoDev" using same Orbitron style as other screens.
   - Displays three-dots control at the header right and a centered card with photo, name, description and a red "Entrar no site" button.
*/

import { setupMenu } from './menu.js';
import { showSecondScreen } from './secondScreen.js';

export function showPartnershipScreen() {
  document.head.querySelectorAll('link[data-secondscreen]').length || null;

  document.body.innerHTML = `
    <nav class="navbar">
      <div class="logo">&lt;<span class="surtado">SurtadoDev</span>/&gt;</div>
      <div class="hamburger" id="hamburger" aria-label="Menu" role="button" tabindex="0">
        <i class="fas fa-bars"></i>
      </div>
    </nav>

    <main class="partnership-main">
      <div class="partners-grid">
        <div class="partner-card">
          <div class="partner-photo"><img src="/pasta.png" alt="Parceiro 1"></div>
          <div class="partner-name">SurtadoDev</div>
          <div class="partner-desc">Criador, desenvolvedor e entusiasta de web e games. Parcerias e colaborações abertas — entre em contato para projetos e consultorias.</div>
          <div class="partner-actions"><a class="btn-enter" href="https://www.instagram.com/reel/DR49KjxEYrd/?igsh=djBybW1lcGozMW9r" target="_blank" rel="noopener noreferrer">Entrar no site</a></div>
        </div>

        <div class="partner-card">
          <div class="partner-photo"><img src="/pasta.png" alt="Parceiro 2"></div>
          <div class="partner-name">MapeiaLab</div>
          <div class="partner-desc">Especialistas em mapeamento geoespacial e visualização de dados para projetos cartográficos.</div>
          <div class="partner-actions"><a class="btn-enter" href="#" target="_blank" rel="noopener noreferrer">Entrar no site</a></div>
        </div>

        <div class="partner-card">
          <div class="partner-photo"><img src="/pasta.png" alt="Parceiro 3"></div>
          <div class="partner-name">GameTools</div>
          <div class="partner-desc">Ferramentas e utilitários para desenvolvedores indie em Game Maker e engines similares.</div>
          <div class="partner-actions"><a class="btn-enter" href="#" target="_blank" rel="noopener noreferrer">Entrar no site</a></div>
        </div>
      </div>
    </main>
  `;

  const s = document.createElement('style');
  s.textContent = `
    :root{ --bg:#000; --red:#e11; --white:#fff; --safe-padding:env(safe-area-inset-top,16px) }
    html,body{height:100%}
    body{ margin:0; background:var(--bg); color:var(--white); font-family:Inter, Poppins, system-ui, sans-serif; display:flex; flex-direction:column; align-items:center; padding:24px; box-sizing:border-box; }
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
    .navbar .logo{ color:var(--white); font-weight:800; font-size:clamp(18px,2.4vw,28px); letter-spacing:1px; }
    .surtado{ font-family: 'Orbitron', sans-serif; font-weight:800; color:var(--white); }

    .partnership-main{
      width:100%;
      max-width:980px;
      margin-top:86px;
      display:flex;
      align-items:flex-start;
      justify-content:center;
      padding:24px;
      box-sizing:border-box;
      min-height: calc(100vh - 160px);
      /* enable scrolling when content exceeds available height */
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }

    /* partners grid with three cards */
    .partners-grid{
      width:100%;
      max-width:980px;
      display:grid;
      grid-template-columns: repeat(3, 1fr);
      gap:18px;
      align-items:start;
      /* allow internal grid spacing while scroll keeps outer layout stable */
      padding-bottom: 18px;
    }

    /* simple scrollbar styling for visibility */
    .partnership-main::-webkit-scrollbar{ width:10px }
    .partnership-main::-webkit-scrollbar-track{ background: transparent }
    .partnership-main::-webkit-scrollbar-thumb{ background: rgba(255,255,255,0.06); border-radius:10px }
    .partnership-main::-webkit-scrollbar-thumb:hover{ background: rgba(255,255,255,0.12) }
    .partner-card{
      background: rgba(255,255,255,0.02);
      border-radius:12px;
      padding:16px;
      display:flex;
      flex-direction:column;
      gap:12px;
      align-items:center;
      border:1px solid rgba(255,255,255,0.04);
      box-shadow: 0 8px 30px rgba(0,0,0,0.6);
    }
    .partner-photo img{ width:120px; height:120px; object-fit:cover; border-radius:12px; background:rgba(255,255,255,0.02); }
    .partner-name{ font-family: 'Orbitron', sans-serif; font-weight:800; font-size:18px; color:var(--white); text-align:center; }
    .partner-desc{ color:rgba(255,255,255,0.85); font-size:14px; text-align:center; line-height:1.4; min-height:56px; }
    .partner-actions .btn-enter{ display:inline-block; background:var(--red); color:#111; padding:8px 12px; border-radius:10px; font-weight:800; text-decoration:none; }

    @media (max-width:900px){
      .partners-grid{ grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width:600px){
      .partners-grid{ grid-template-columns: 1fr; }
      .partner-photo img{ width:140px; height:140px; border-radius:12px; }
    }
  `;
  document.head.appendChild(s);

  setupMenu();

  // listen for menu selection to go back to inicio
  const onMenuSelect = (e) => {
    const name = (e.detail || '').toString().toLowerCase();
    if (name === 'inicio') {
      showSecondScreen();
    }
  };
  document.addEventListener('menu:select', onMenuSelect);
}