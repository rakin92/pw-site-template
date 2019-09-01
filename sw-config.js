if ('function' === typeof importScripts) {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js'
  );
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded');

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([
  {
    "url": "icon-128.png",
    "revision": "b950e4a593462c2fa69f4fe3662e3681"
  },
  {
    "url": "icon-144.png",
    "revision": "79b2ce061b0d49ec3b364b5c87834fb6"
  },
  {
    "url": "icon-152.png",
    "revision": "06a18d61ec31bb691419cc0a7f616c98"
  },
  {
    "url": "icon-192.png",
    "revision": "1b9cd34144958dcc24aef4dafac03ac8"
  },
  {
    "url": "icon-384.png",
    "revision": "ac444ea9aab518ab723fb6c44956613a"
  },
  {
    "url": "icon-512.png",
    "revision": "44fdd16dbaff7861b9f8ad9391717f72"
  },
  {
    "url": "icon-72.png",
    "revision": "e62a0db6f6f1ca49623756c15616317d"
  },
  {
    "url": "icon-96.png",
    "revision": "bc5690ea8a7729659d979f7014abecea"
  },
  {
    "url": "index.html",
    "revision": "a0bae520c36450b3c25dc8530134804f"
  },
  {
    "url": "logo192.png",
    "revision": "33dbdd0177549353eeeb785d02c294af"
  },
  {
    "url": "logo512.png",
    "revision": "917515db74ea8d1aee6a246cfbcc0b45"
  },
  {
    "url": "precache-manifest.05e08e1f68c3d7dfd343796aa15d4377.js",
    "revision": "05e08e1f68c3d7dfd343796aa15d4377"
  },
  {
    "url": "service-worker.js",
    "revision": "5865ab7054e4114ba52229c0a12df4f8"
  },
  {
    "url": "static/css/main.4933c57a.chunk.css",
    "revision": "ac58c52b0832aa8ee5737f6255be3a51"
  },
  {
    "url": "static/js/2.de9ec731.chunk.js",
    "revision": "790f72378898d27ac43e143dabf7fd08"
  },
  {
    "url": "static/js/main.29153349.chunk.js",
    "revision": "a89719e48297c08bf97c801935359511"
  },
  {
    "url": "static/js/runtime~main.d6870233.js",
    "revision": "34786c5b890437798362de761944d0ed"
  }
]);

    /* custom cache rules*/
    workbox.routing.registerNavigationRoute('/index.html', {
      blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
    });

    // Cache images
    workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
      new workbox.strategies.CacheFirst({
        cacheName: 'images',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 80,
            maxAgeSeconds: 30 * 24 * 60 * 60 * 10, // 90 Days
          }),
        ],
      })
    );

    // Cache fonts
    workbox.routing.registerRoute(
      /\.(?:woff|ico|woff2|tff|eot)$/,
      new workbox.strategies.CacheFirst({
        cacheName: 'fonts',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 80,
            maxAgeSeconds: 30 * 24 * 60 * 60 * 10, // 90 Days
          }),
        ],
      })
    );

    // Cache JS and CSS, use cache and update on the background
    workbox.routing.registerRoute(
      /\.(?:js|css|html)$/,
      new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'static-resources',
      })
    );

  } else {
    console.log('Workbox could not be loaded. No Offline support');
  }
}