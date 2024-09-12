const CACHE_NAME = 'ChecklistPWA-v2';

// Archivos a cachear
const urlsToCache = [
    '/',
    '/index.html',
    '/icon-192x192.png',
    '/icon-512x512.png'
];

// Evento de instalación: abre el caché y agrega los archivos definidos
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Cache abierta');
                return cache.addAll(urlsToCache);  // Agregar todos los archivos al caché
            })
    );
});

// Evento de activación: elimina cachés antiguas
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        console.log('Caché obsoleta eliminada:', cacheName);
                        return caches.delete(cacheName);  // Elimina las versiones antiguas
                    }
                })
            );
        })
    );
});

// Evento fetch: intercepta solicitudes de red y sirve desde la caché si es posible
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response;  // Si el recurso está en caché, devuélvelo
                }
                return fetch(event.request);  // Si no, realiza la solicitud de red
            })
    );
});
