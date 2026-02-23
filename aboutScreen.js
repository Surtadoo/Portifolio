/* aboutScreen.js
   New module: shows the "Sobre" screen per user request.
*/

import { setupMenu } from './menu.js';
import { showSecondScreen } from './secondScreen.js';

export function showAboutScreen() {
  document.body.innerHTML = `
    <nav class="navbar">
      <div class="logo">&lt;<span class="surtado">SurtadoDev</span>/&gt;</div>
      <div class="hamburger" id="hamburger" aria-label="Menu" role="button" tabindex="0">
        <i class="fas fa-bars"></i>
      </div>
    </nav>

    <main class="about-main">

      <div class="about-wrap">
        <section class="about-content">
          <h2>Sobre Mim</h2>
          <div class="underline"></div>

          <p class="about-text">
            Olá — eu sou Surtado. Este site reúne projetos, ferramentas e experimentos em web e game
            development. Aqui eu compartilho projetos de sites, aplicativos, mapeamento e utilitários para Game Maker.
            Sinto paixão por resolver problemas com código e por criar interfaces simples, rápidas e funcionais.
            Sinta-se à vontade para explorar os projetos e entrar em contato.
          </p>

          <div class="about-actions">
            <a class="btn discord" href="#" role="button">
              <i class="fab fa-discord"></i>
              Discord
            </a>

            <a class="btn whatsapp" href="https://wa.me/5521980204832" role="button" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-whatsapp"></i>
              WhatsApp
            </a>
          </div>
        </section>
      </div>
    </main>
  `;

  const s = document.createElement('style');
  s.textContent = `
    :root{ --bg:#000; --red:#e11; --muted:rgba(255,255,255,0.14); --safe-padding:env(safe-area-inset-top,16px) }
    html,body{height:100%}
    body{margin:0;background:var(--bg);color:#fff;font-family:Inter, Poppins, system-ui, sans-serif;display:flex;flex-direction:column;align-items:center; padding:20px; box-sizing:border-box;}
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

    .about-main{ width:100%; max-width:980px; margin-top:86px; display:flex; flex-direction:column; align-items:center; gap:18px; padding:18px; box-sizing:border-box; }

    .bolinha{ width:12px; height:12px; border-radius:50%; margin-right:6px; }
    .vermelha{ background:#ff5f56; } .amarela{ background:#ffbd2e; } .verde{ background:#27c93f; }
    .barra{ flex:1; height:12px; background:rgba(255,255,255,0.05); border-radius:6px; margin-left:10px; }

    .about-wrap{ width:100%; background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); border-radius:16px; padding:22px; box-sizing:border-box; border:1px solid rgba(255,255,255,0.04); }

    .about-content h2{
      font-size:20px;
      margin:6px 0 8px 0;
      color:#fff;
      text-align:center;
      width:100%;
    }
    .underline{
      width:60px;
      height:6px;
      background:var(--red);
      border-radius:4px;
      margin:8px auto 12px;
    }

    .about-text{ color:#fff; line-height:1.6; font-size:15px; margin-bottom:18px; }

    .about-actions{ display:flex; gap:12px; flex-wrap:wrap; }
    .btn{ display:inline-flex; align-items:center; gap:10px; padding:10px 14px; border-radius:12px; font-weight:700; text-decoration:none; color:#fff; }
    .btn .fa-discord, .btn .fa-whatsapp{ font-size:18px; }

    .btn.discord{ background:#5865F2; color:#fff; }
    .btn.whatsapp{ background:#25D366; color:#04260f; }

    /* ensure the Surtado name uses the Orbitron font (same as other screens) */
    .surtado{ font-family: 'Orbitron', sans-serif; font-weight:800; color:#fff; }

    @media (max-width:420px){
      .about-title{ font-size:22px; }
      .about-text{ font-size:14px; }
      .btn{ padding:10px 12px; font-size:14px; }
    }
  `;
  document.head.appendChild(s);

  setupMenu();

  // when menu 'inicio' is clicked bring back the second (entry) screen
  const onMenuSelect = (e) => {
    const name = (e.detail || '').toString().toLowerCase();
    if (name === 'inicio') {
      showSecondScreen();
    }
  };
  document.addEventListener('menu:select', onMenuSelect);
}