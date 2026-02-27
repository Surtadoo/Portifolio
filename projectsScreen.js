/* projectsScreen.js
   Refactored: this module now delegates rendering, styles and wiring to dedicated modules.
   Tombstones for removed code:
     // removed large inline DOM + styles + wiring from original showProjectsScreen() {}
*/

import { setupMenu } from './menu.js';
import { renderProjectsScreen, wireProjects } from './projectsUI.js';
import './projectsStyles.js'; // inject styles

export function showProjectsScreen() {
  // render static DOM for the projects screen (keeps this file small)
  renderProjectsScreen();

  // wire menu and interactive behavior
  setupMenu();
  wireProjects();
}