importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
workbox.precaching.precacheAndRoute(self.__precacheManifest);
self.__WB_MANIFEST;
workbox.routing.registerRoute(
  /https:\/\/nature40\.github\.io\/SENSO-Trail/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "sensoapp",
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 10 * 60 // 10 minutes
      })
    ]
  })
);