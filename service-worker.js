let CACHE_NAME = "static-cache";
let urlsToCache = ["/bundle.js", "../App/img/img.jpg", "../App/bootstrap/bootstrap.min.css", "../App/bootstrap/jquery-3.5.1.min.js", "../App/bootstrap/popper.min.js"];

self.addEventListener("install", (e) => e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))));

self.addEventListener("activate", function (event) {
	event.waitUntil(caches.keys().then((cacheNames) => Promise.all(cacheNames.filter((cacheName) => cacheName != CACHE_NAME).map((cacheName) => caches.delete(cacheName)))));
});

self.addEventListener("fetch", (e) => e.respondWith(caches.match(e.request).then((res) => (res ? res : fetch(e.request)))));
