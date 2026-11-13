// Forge's web app is shut down: the beta is TestFlight (https://forgetrainanywhere.com/beta/). This worker replaces the app's own at this address.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil((async () => {
  for (const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: 'window' })) {
    try { await c.navigate("/beta/"); } catch (e) { /* closed meanwhile */ }
  }
})()));
