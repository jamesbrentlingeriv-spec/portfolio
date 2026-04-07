(function () {
  "use strict";

  const APP_NAME = "iamjames";
  const INSTALL_DISMISSED_KEY = "pwa-install-dismissed-at";
  const INSTALL_RELOAD_KEY = "pwa-sw-reload-once";
  const INSTALL_DISMISS_TTL_MS = 3 * 24 * 60 * 60 * 1000;

  const isIos = /iphone|ipad|ipod/i.test(window.navigator.userAgent);
  const isStandalone =
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true;
  const isSupported =
    "serviceWorker" in navigator &&
    (window.isSecureContext ||
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1");

  let deferredInstallPrompt = null;

  if (
    window.location.hostname === "iamjames.lol" &&
    window.location.protocol !== "https:"
  ) {
    window.location.replace(
      "https://" +
        window.location.host +
        window.location.pathname +
        window.location.search +
        window.location.hash,
    );
    return;
  }

  function wasInstallPromptDismissedRecently() {
    const raw = localStorage.getItem(INSTALL_DISMISSED_KEY);
    if (!raw) {
      return false;
    }

    const dismissedAt = Number(raw);
    if (!Number.isFinite(dismissedAt)) {
      localStorage.removeItem(INSTALL_DISMISSED_KEY);
      return false;
    }

    if (Date.now() - dismissedAt > INSTALL_DISMISS_TTL_MS) {
      localStorage.removeItem(INSTALL_DISMISSED_KEY);
      return false;
    }

    return true;
  }

  function ensurePwaMeta() {
    function ensureMeta(name, content) {
      let element = document.querySelector('meta[name="' + name + '"]');
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    }

    function ensureLink(rel, href) {
      let element = document.querySelector('link[rel="' + rel + '"]');
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    }

    ensureMeta("theme-color", "#0a0a0f");
    ensureMeta("mobile-web-app-capable", "yes");
    ensureMeta("apple-mobile-web-app-capable", "yes");
    ensureMeta("apple-mobile-web-app-title", APP_NAME);
    ensureMeta("apple-mobile-web-app-status-bar-style", "black-translucent");
    ensureLink("apple-touch-icon", "/logo192.png");
  }

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
    if (wasInstallPromptDismissedRecently()) {
      return;
    }

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
    dismissButton.textContent = "x";
    dismissButton.setAttribute("aria-label", "Dismiss install message");
    dismissButton.addEventListener("click", function () {
      localStorage.setItem(INSTALL_DISMISSED_KEY, String(Date.now()));
      removeInstallUi();
    });
    actions.appendChild(dismissButton);

    card.appendChild(copy);
    card.appendChild(actions);
    wrapper.appendChild(card);
    document.body.appendChild(wrapper);
  }

  if (!isSupported) {
    if (isIos && !isStandalone) {
      window.addEventListener("load", function () {
        ensurePwaMeta();
        showInstallUi({
          message: "On iPhone or iPad, tap Share and then Add to Home Screen.",
          showInstallButton: false,
        });
      });
    }
    return;
  }

  window.addEventListener("load", function () {
    ensurePwaMeta();

    const swUrl = new URL("./sw.js", window.location.href).href;
    const swScope = new URL("./", window.location.href).pathname;

    navigator.serviceWorker
      .register(swUrl, { scope: swScope })
      .then(function (registration) {
        console.log("PWA service worker registered.");
        registration.update();

        return navigator.serviceWorker.ready;
      })
      .then(function () {
        if (
          !navigator.serviceWorker.controller &&
          sessionStorage.getItem(INSTALL_RELOAD_KEY) !== "1"
        ) {
          sessionStorage.setItem(INSTALL_RELOAD_KEY, "1");
          window.location.reload();
        }
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

    if (!isIos && !isStandalone) {
      window.setTimeout(function () {
        if (!deferredInstallPrompt) {
          showInstallUi({
            message:
              "If install is not prompted automatically, open your browser menu and tap Install app or Add to Home screen.",
            showInstallButton: false,
          });
        }
      }, 6000);
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
