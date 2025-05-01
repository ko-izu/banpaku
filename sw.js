var CACHE_NAME = 'pwa-sample-cache-v2';
var urlsToCache = [
    '/index.html',
    '/manifest.webmanifest',
    '/sw.js',
"https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.min.js",
"https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.min.css",
"https://unpkg.com/leaflet.markercluster@1.3.0/dist/leaflet.markercluster.js",
"https://unpkg.com/leaflet.markercluster@1.3.0/dist/MarkerCluster.css",
"https://unpkg.com/leaflet.markercluster@1.3.0/dist/MarkerCluster.Default.css",
"https://cdnjs.cloudflare.com/ajax/libs/nosleep/0.12.0/NoSleep.min.js",
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                return response ? response : fetch(event.request);
            })
    );
});

