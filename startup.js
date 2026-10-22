'use strict';

window.__guidebookStartedAt = Date.now();
try {
  const key = 'pirate-reborn-theme-v1';
  const migration = 'pirate-reborn-theme-default-v2';
  let theme = localStorage.getItem(key);
  if (localStorage.getItem(migration) !== '1') {
    theme = 'light';
    localStorage.setItem(key, theme);
    localStorage.setItem(migration, '1');
  }
  document.documentElement.dataset.theme = theme === 'dark' ? 'dark' : 'light';
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || (navigator.deviceMemory && navigator.deviceMemory <= 4) || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 6)) {
    document.documentElement.classList.add('performance-lite');
  }
} catch {
  document.documentElement.dataset.theme = 'light';
}

// Keep the loading overlay from trapping the page even if app.js fails.
window.setTimeout(() => {
  const screen = document.getElementById('startup-screen');
  if (!screen) return;
  screen.classList.add('is-exiting');
  window.setTimeout(() => screen.remove(), 400);
}, 3000);
