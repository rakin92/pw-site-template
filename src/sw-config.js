if ('function' === typeof importScripts) {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js'
  );
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded');

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([]);

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