(function () {
  "use strict";

  const isIos = /iphone|ipad|ipod/i.test(window.navigator.userAgent);
  const isStandalone =
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true;
  const isSupported =
    "serviceWorker" in navigator &&
    (window.location.protocol === "https:" ||
      window.location.hostname === "localhost");

  let deferredInstallPrompt = null;

  function injectInstallStyles() {
    if (document.getElementById("pwa-install-styles")) {
      return;
    }

    const style = document.createElement("style");
    style.id = "pwa-install-styles";
    style.textContent = [
      ".pwa-install-ui { position: fixed; left: 16px; right: 16px; bottom: 16px; z-index: 10001; display: flex; justify-content: center; pointer-events: none; }",
      ".pwa-install-card { max-width: 420px; width: 100%; pointer-events: auto; display: flex; align-items: center; gap: 12px; padding: 14px 16px; border-radius: 18px; background: rgba(10, 10, 15, 0.94); color: #f5f5f5; border: 1px solid rgba(255,255,255,0.12); box-shadow: 0 20px 50px rgba(0,0,0,0.35); backdrop-filter: blur(14px); }",
      ".pwa-install-copy { flex: 1; min-width: 0; }",
      ".pwa-install-copy strong { display: block; font-size: 0.95rem; margin-bottom: 2px; }",
      ".pwa-install-copy span { display: block; font-size: 0.82rem; color: rgba(255,255,255,0.72); line-height: 1.45; }",
      ".pwa-install-actions { display: flex; align-items: center; gap: 8px; }",
      ".pwa-install-btn, .pwa-dismiss-btn { border: 0; cursor: pointer; }",
      ".pwa-install-btn { padding: 10px 14px; border-radius: 999px; background: #f5f5f5; color: #111; font-weight: 700; font-size: 0.82rem; }",
      ".pwa-dismiss-btn { width: 34px; height: 34px; border-radius: 999px; background: rgba(255,255,255,0.08); color: #fff; font-size: 1rem; line-height: 1; }",
      "@media (max-width: 560px) { .pwa-install-card { align-items: flex-start; flex-direction: column; } .pwa-install-actions { width: 100%; justify-content: flex-end; } }",
    ].join("");
    document.head.appendChild(style);
  }

  function removeInstallUi() {
    document.querySelectorAll(".pwa-install-ui").forEach(function (element) {
      element.remove();
    });
  }

  function showInstallUi(options) {
    injectInstallStyles();
    removeInstallUi();

    const wrapper = document.createElement("div");
    wrapper.className = "pwa-install-ui";

    const card = document.createElement("div");
    card.className = "pwa-install-card";

    const copy = document.createElement("div");
    copy.className = "pwa-install-copy";
    copy.innerHTML =
      "<strong>Install iamjames</strong><span>" + options.message + "</span>";

    const actions = document.createElement("div");
    actions.className = "pwa-install-actions";

    if (options.showInstallButton) {
      const installButton = document.createElement("button");
      installButton.type = "button";
      installButton.className = "pwa-install-btn";
      installButton.textContent = "Install";
      installButton.addEventListener("click", options.onInstall);
      actions.appendChild(installButton);
    }

    const dismissButton = document.createElement("button");
    dismissButton.type = "button";
    dismissButton.className = "pwa-dismiss-btn";
    dismissButton.textContent = "×";
    dismissButton.setAttribute("aria-label", "Dismiss install message");
    dismissButton.addEventListener("click", removeInstallUi);
    actions.appendChild(dismissButton);

    card.appendChild(copy);
    card.appendChild(actions);
    wrapper.appendChild(card);
    document.body.appendChild(wrapper);
  }

  if (!isSupported) {
    if (isIos && !isStandalone) {
      window.addEventListener("load", function () {
        showInstallUi({
          message: "On iPhone or iPad, tap Share and then Add to Home Screen.",
          showInstallButton: false,
        });
      });
    }
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

    if (isIos && !isStandalone) {
      showInstallUi({
        message: "On iPhone or iPad, tap Share and then Add to Home Screen.",
        showInstallButton: false,
      });
    }
  });

  window.addEventListener("beforeinstallprompt", function (event) {
    event.preventDefault();
    deferredInstallPrompt = event;

    showInstallUi({
      message:
        "Install the portfolio for a fullscreen app experience and faster repeat visits.",
      showInstallButton: true,
      onInstall: function () {
        if (!deferredInstallPrompt) {
          return;
        }

        deferredInstallPrompt.prompt();
        deferredInstallPrompt.userChoice.finally(function () {
          deferredInstallPrompt = null;
          removeInstallUi();
        });
      },
    });
  });

  window.addEventListener("appinstalled", function () {
    deferredInstallPrompt = null;
    removeInstallUi();
  });
})();
