const CACHE = 'pirate-reborn-guidebook-v212';
const SHELL = ['./', './index.html', './startup.js', './styles.css?v=20261023-text-scramble-v1', './app.js?v=20261023-text-scramble-v1', './motion.bundle.js', './motion.bundle.css', './manifest.webmanifest', './icon.svg', './assets/crew-background-optimized.jpg', './assets/pirate-reborn-app-icon-original.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cached = await caches.match(event.request);
    if (cached) return cached;
    const response = await fetch(event.request);
    if (response.ok) event.waitUntil(caches.open(CACHE).then(cache => cache.put(event.request, response.clone())));
    return response;
  })());
});






























