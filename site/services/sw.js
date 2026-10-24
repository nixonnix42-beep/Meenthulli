// Keeps the app opening even with weak network. Change VERSION after you edit files.
const VERSION = "meenthulli-home-services-v8";
const FILES = ["./", "index.html", "manifest.json", "icons/icon-192.png", "icons/icon-512.png"];
self.addEventListener("install", e => { self.skipWaiting(); e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES))); });
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k))))));
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(fetch(e.request).then(r => {
    if (r.ok && new URL(e.request.url).origin === location.origin) { const copy = r.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); }
    return r;
  }).catch(() => caches.match(e.request).then(r => r || caches.match("index.html"))));
});
