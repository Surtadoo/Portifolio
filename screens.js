/* screens.js (refactored)
   Tombstones: large screen functions moved to dedicated modules for maintainability.
   - removed function showSecondScreen() {}
   - removed function showProjectsScreen() {}
   - removed function wireActionButtons() {}
*/

import { setupMenu } from './menu.js';
import { showSecondScreen } from './secondScreen.js';
import { showProjectsScreen } from './projectsScreen.js';
import { showAboutScreen } from './aboutScreen.js';
import { showPartnershipScreen } from './partnershipScreen.js';

function injectHeadResources() {
  const head = document.head;
  const add = (href, rel = 'stylesheet') => {
    const l = document.createElement('link');
    l.rel = rel;
    l.href = href;
    // mark injected resources so other modules can detect/prevent duplicates
    l.setAttribute('data-secondscreen', 'true');
    head.appendChild(l);
  };
  add('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap');
  add('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;800&display=swap');
  add('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
  add('https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css');
}

export function initScreens() {
  // preload fonts/styles early
  injectHeadResources();

  // global menu routing: listen for menu selections and show the proper screen
  document.addEventListener('menu:select', (e) => {
    const name = (e.detail || '').toString().toLowerCase();
    if (name === 'inicio') {
      showSecondScreen();
    } else if (name === 'projetos' || name === 'projetos' /* fallback */) {
      showProjectsScreen();
    } else if (name === 'sobre') {
      showAboutScreen();
    } else if (name === 'parcerias' || name === 'parceria' || name === 'parcerias ') {
      showPartnershipScreen();
    }
  });
}

// re-exported helpers for other modules to call when needed
export { showSecondScreen, showProjectsScreen };

// keep triggerEnter here but delegate the actual screen rendering to showSecondScreen()
export function triggerEnter() {
  // tombstone: original triggerEnter logic was moved here from app.js
  const enterBtn = document.getElementById('enterBtn');
  const message = document.getElementById('message');
  let clicked = false;

  return function innerTrigger() {
    if (clicked) return;
    clicked = true;

    if (enterBtn && enterBtn.animate) {
      enterBtn.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(0.96)' },
        { transform: 'scale(1.02)' },
        { transform: 'scale(1)' }
      ], { duration: 320, easing: 'cubic-bezier(.2,.9,.28,1)' });
    }

    if (message) message.style.opacity = '0';
    setTimeout(() => {
      if (message) {
        message.textContent = 'Abrindo o site…';
        message.style.opacity = '0.95';
      }
    }, 120);

    setTimeout(() => {
      showSecondScreen();
    }, 600);
  }();
}