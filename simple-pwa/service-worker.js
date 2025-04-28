const CACHE_NAME = 'simple-pwa-cache-v1';
const urlsToCache = [
  '/simple-pwa/',
  '/simple-pwa/index.html',
  '/simple-pwa/manifest.json',
  '/simple-pwa/app.js',
  '/simple-pwa/service-worker.js'
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
