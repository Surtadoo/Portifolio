/*
  Module loader for application logic.

  Removed large inline logic from this file and moved to app.js for better organization.
  Tombstones below indicate functions removed from this file and now implemented in app.js
*/

// removed function injectHeadResources() {}
// removed function showSecondScreen() {}
// removed function showProjectsScreen() {}
// removed function triggerEnter() {}

// import and initialize the app
import { init } from './app.js';

init();