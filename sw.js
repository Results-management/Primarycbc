// Minimal service worker — exists mainly to satisfy PWA "installable" criteria
// (browsers require one to be registered before showing an "Add to Home
// Screen" / install prompt). It deliberately does NOT cache index.html or any
// app data: this app's whole purpose is showing live marks synced from
// GitHub, so caching it would risk teachers seeing stale data or a stale
// version of the app after an update. If offline support is wanted later,
// add caching here deliberately and test it against the GitHub sync flow.
self.addEventListener('install', () => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
// No fetch handler on purpose — every request passes straight through to
// the network, exactly as if there were no service worker at all.
