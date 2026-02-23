/*
  app.js (refactored)
  - Tombstones mark where large functions were removed into modules for better structure.
  - This file now exposes init() and delegates heavy lifting to screens.js and menu.js.
*/

// removed function injectHeadResources() {}
// removed function showSecondScreen() {}
// removed function showProjectsScreen() {}
// removed function setupMenu() {}
// removed function wireActionButtons() {}
// removed function triggerEnter() {}

import { initScreens, triggerEnter } from './screens.js';

export function init() {
  const enterBtn = document.getElementById('enterBtn');

  // wire up initial interactions safely (guard for environments)
  if (!enterBtn) return;

  enterBtn.addEventListener('click', (e) => { e.preventDefault(); triggerEnter(); });
  enterBtn.addEventListener('pointerdown', (e) => { if (e.button === 0) { e.preventDefault(); triggerEnter(); } });
  enterBtn.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); triggerEnter(); } });

  // initialize other screen-related things (fonts, etc.)
  initScreens();
}

// default export
export default { init };