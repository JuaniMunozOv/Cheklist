const CACHE_NAME = 'ChecklistPWA-v1';
const urlsToCache = [
    '/',
    '/checklistgeologia&proespeccao.html',
    '/icon-192x192.png',
    '/icon-512x512.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Cache abierta');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response;  // Si está en la caché, usa la versión en caché
                }
                return fetch(event.request);  // De lo contrario, realiza la solicitud a la red
            })
    );
});
