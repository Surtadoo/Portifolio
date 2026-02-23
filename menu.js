/* New module: menu.js
   - Implements the dropdown/hamburger behavior used across screens.
*/

export function setupMenu() {
  const nav = document.querySelector('.navbar');
  const ham = document.getElementById('hamburger');
  if (!ham || !nav) return;

  // remove existing dropdown if any (safe re-init)
  const existing = nav.querySelector('.dropdown');
  if (existing) existing.remove();

  const dd = document.createElement('div');
  dd.className = 'dropdown';
  dd.innerHTML = `
    <a class="item active">inicio</a>
    <a class="item">Sobre</a>
    <a class="item">Parcerias</a>
  `;
  nav.appendChild(dd);

  const toggle = () => {
    dd.classList.toggle('open');
    ham.classList.toggle('open');
  };
  ham.addEventListener('click', toggle);
  ham.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });

  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && dd.classList.contains('open')) {
      dd.classList.remove('open');
      ham.classList.remove('open');
    }
  });

  dd.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', (ev) => {
      ev.preventDefault();
      dd.querySelectorAll('.item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      dd.classList.remove('open');
      ham.classList.remove('open');

      // dispatch a generic menu selection event so screens can react
      const name = (item.textContent || '').trim().toLowerCase();
      document.dispatchEvent(new CustomEvent('menu:select', { detail: name }));
    });
  });
}