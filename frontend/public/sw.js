// Kill switch for the old site's service worker (next-pwa, register: true, dest:
// "public", scope "/"). That site is gone, but a returning visitor's browser can
// still have next-pwa's sw.js controlling this origin until something at this
// same URL unregisters it -- there is no other way to reach an already-installed
// worker. This file replaces it: it claims nothing, fetches nothing, and removes
// itself. Safe to delete once traffic analytics show no more activations of the
// old worker (a few months out from this rebuild's launch).
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
    })(),
  );
});
