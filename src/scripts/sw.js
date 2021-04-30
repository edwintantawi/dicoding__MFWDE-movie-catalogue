/* eslint-disable no-restricted-globals */
self.addEventListener('instal', () => {
  console.info('Installing Service Worker...');
});

self.addEventListener('activate', () => {
  console.info('Activating Service Worker...');
});

self.addEventListener('fetch', (event) => {
  console.info('fetch : ', event.request);

  event.respondWith(fetch(event.request));
});
