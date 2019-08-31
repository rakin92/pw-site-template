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
    "revision": "01db150f9bd0b21bb5ff49665c74ca6b"
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
    "url": "precache-manifest.d632e653297bd507b4ad4ad56cb0b7d6.js",
    "revision": "d632e653297bd507b4ad4ad56cb0b7d6"
  },
  {
    "url": "service-worker.js",
    "revision": "93e3ab1531cf8b9b1cee2259f64aea06"
  },
  {
    "url": "static/css/main.4933c57a.chunk.css",
    "revision": "ac58c52b0832aa8ee5737f6255be3a51"
  },
  {
    "url": "static/js/2.fdf2a009.chunk.js",
    "revision": "7444864ef7254b4786c56653454b44cd"
  },
  {
    "url": "static/js/main.6fe8e8a0.chunk.js",
    "revision": "f418adac38b14ca207d4c5283f9ac63b"
  },
  {
    "url": "static/js/runtime~main.a28bc127.js",
    "revision": "4ca74ac25f4e92c6e13382c4409c7feb"
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