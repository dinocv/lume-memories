const CACHE = 'lume-v4';
const CORE = ['/', '/index.html', '/manifest.json', '/icon.svg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE).catch(() => {})));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res.ok && e.request.method === 'GET' && !e.request.url.includes('pixabay.com')) {
          caches.open(CACHE).then(c => c.put(e.request, res.clone())).catch(() => {});
        }
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
