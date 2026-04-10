(() => {
  const THEME_KEY = "portfolio-theme";
  const root = document.documentElement;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.12 },
  );

  document
    .querySelectorAll(".reveal")
    .forEach((node) => observer.observe(node));

  const navShell = document.querySelector(".site-nav .site-shell");
  let themeToggle = null;

  if (navShell) {
    themeToggle = document.createElement("button");
    themeToggle.className = "theme-toggle";
    themeToggle.type = "button";
    themeToggle.setAttribute("aria-pressed", "false");
    themeToggle.setAttribute("aria-label", "Toggle dark mode");

    navShell.appendChild(themeToggle);
  }

  const getStoredTheme = () => {
    try {
      const value = localStorage.getItem(THEME_KEY);
      return value === "light" || value === "dark" ? value : null;
    } catch {
      return null;
    }
  };

  const setStoredTheme = (theme) => {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // Ignore storage failures in private or restricted contexts.
    }
  };

  const getSystemTheme = () =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const ensureThemeMeta = () => {
    let themeMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeMeta) {
      themeMeta = document.createElement("meta");
      themeMeta.setAttribute("name", "theme-color");
      document.head.appendChild(themeMeta);
    }
    return themeMeta;
  };

  const themeMeta = ensureThemeMeta();

  const applyTheme = (theme, persist = true) => {
    root.setAttribute("data-theme", theme);
    themeMeta.setAttribute("content", theme === "dark" ? "#000000" : "#FFFC00");

    if (themeToggle) {
      themeToggle.textContent = theme === "dark" ? "Light" : "Dark";
      themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
    }

    if (persist) {
      setStoredTheme(theme);
    }
  };

  const preferredTheme = getStoredTheme() || getSystemTheme();
  applyTheme(preferredTheme, false);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextTheme =
        root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
    });
  }

  if (window.matchMedia) {
    const systemThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    systemThemeQuery.addEventListener("change", (event) => {
      if (!getStoredTheme()) {
        applyTheme(event.matches ? "dark" : "light", false);
      }
    });
  }

  const menuToggle = document.querySelector(".menu-toggle");
  const navPanel = document.getElementById("navPanel");

  if (menuToggle && navPanel) {
    const closeMenu = () => {
      navPanel.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    };

    menuToggle.addEventListener("click", () => {
      const open = navPanel.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });

    navPanel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    });
  }
})();
