// sw.js
const CACHE_NAME = 'stoic-wisdom-cache-v1';
const URLS_TO_CACHE = [
  '/', // Si stoic-wisdomV2.html est votre index.html ou servi à la racine
  '/stoic-wisdomV2.html',
  '/quotes.js',
  '/buste-philosophe.png', // L'icône principale
  '/buste-philosophe-192.png', // Icônes PWA
  '/buste-philosophe-512.png'  // Icônes PWA
  // Ajoutez d'autres assets importants ici si vous en avez (CSS externe, polices...)
];

// Installation du Service Worker et mise en cache des assets initiaux
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

// Interception des requêtes et service depuis le cache si disponible
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request); // Sinon, fetch depuis le réseau
      }
    )
  );
});

// Optionnel : Gérer l'activation (nettoyage des anciens caches)
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});