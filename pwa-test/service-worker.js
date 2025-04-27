const CACHE_NAME = 'simple-pwa-cache-v1';
const urlsToCache = [
  '/pwa-test/',
  '/pwa-test/index.html',
  '/pwa-test/manifest.json',
  '/pwa-test/app.js',
  '/pwa-test/icon.png'
];

// Install the service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// Fetch resources
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});

