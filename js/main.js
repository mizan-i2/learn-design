(function () {
  const THEME_KEY = "psdbim-theme";

  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") {
      return saved;
    }
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);

    const toggle = document.querySelector(".theme-toggle");
    if (toggle) {
      toggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      );
      toggle.setAttribute(
        "title",
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      );
    }
  }

  applyTheme(getPreferredTheme());

  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");
  const themeToggle = document.querySelector(".theme-toggle");
  const yearEl = document.getElementById("year");
  const form = document.querySelector(".contact-form");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      const isOpen = mainNav.classList.toggle("open");
      navToggle.classList.toggle("active", isOpen);
      navToggle.setAttribute("aria-expanded", isOpen);
      navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("open");
        navToggle.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thanks for your message! Connect this form to Formspree or your email service to receive submissions.");
      form.reset();
    });
  }
})();
