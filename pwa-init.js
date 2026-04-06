(function () {
  "use strict";

  const isSupported =
    "serviceWorker" in navigator &&
    (window.location.protocol === "https:" ||
      window.location.hostname === "localhost");

  if (!isSupported) {
    return;
  }

  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("./sw.js", { scope: "./" })
      .then(function () {
        console.log("PWA service worker registered.");
      })
      .catch(function (error) {
        console.log("PWA service worker registration failed:", error);
      });
  });
})();
