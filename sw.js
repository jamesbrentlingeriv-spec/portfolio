const SHELL_CACHE = "portfolio-shell-v3";
const RUNTIME_CACHE = "portfolio-runtime-v3";
const OFFLINE_FALLBACK = "./index.html";

const SHELL_ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./pwa-init.js",
  "./screenshot-preview.css",
  "./screenshot-preview.js",
  "./logo192.png",
  "./logo512.png",
];

const OPTIONAL_ASSETS = [
  "./ancient-bible.html",
  "./bible-study.html",
  "./ocu-sync.html",
  "./pal-optical-site.html",
  "./pal-optical.html",
  "./price-list.html",
  "./sermonflow.html",
  "./songbook.html",
  "./the-shaking-of-my-hands.html",
  "./websites.html",
  "./wordwitness.html",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(SHELL_CACHE);
      await cache.addAll(SHELL_ASSETS);

      await Promise.allSettled(
        OPTIONAL_ASSETS.map((asset) => cache.add(asset)),
      );

      await self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter(
              (cacheName) => ![SHELL_CACHE, RUNTIME_CACHE].includes(cacheName),
            )
            .map((cacheName) => caches.delete(cacheName)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);

  if (url.origin !== self.location.origin) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(handleNavigation(request));
    return;
  }

  if (request.destination === "video") {
    return;
  }

  event.respondWith(staleWhileRevalidate(request));
});

async function handleNavigation(request) {
  try {
    const networkResponse = await fetch(request);
    const runtimeCache = await caches.open(RUNTIME_CACHE);
    runtimeCache.put(request, networkResponse.clone());
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request, { ignoreSearch: true });
    return cachedResponse || caches.match(OFFLINE_FALLBACK);
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cachedResponse = await cache.match(request, { ignoreSearch: true });

  const networkResponsePromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse.ok) {
        cache.put(request, networkResponse.clone());
      }

      return networkResponse;
    })
    .catch(() => cachedResponse);

  return cachedResponse || networkResponsePromise;
}
