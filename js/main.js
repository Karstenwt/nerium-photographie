async function loadComponent(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;

  const res = await fetch(url, { cache: "no-cache" });
  if (!res.ok) throw new Error(`Failed to load ${url}`);
  el.innerHTML = await res.text();
}

function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector("[data-nav-links]");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

/* 👇 Transition douce lors des changements de page */
function initPageTransitions() {
  document.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");

    if (
      !href ||
      href.startsWith("#") ||
      href.startsWith("http") ||
      link.hasAttribute("target")
    )
      return;

    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.add("page-transition");
      document.body.classList.remove("page-visible");

      setTimeout(() => {
        window.location.href = href;
      }, 300);
    });
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    /* Fonts prêtes → pas de flash */
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }

    /* Affichage progressif */
    document.body.classList.add("fonts-loaded");
    document.body.classList.add("page-visible");

    await loadComponent("#header", "/components/header.html");
    await loadComponent("#footer", "/components/footer.html");

    initNav();
    initPageTransitions();

    const page = document.body.dataset.page;

    if (page === "portfolio") {
      const mod = await import("./tabs.js");
      mod.initTabs();
      const lb = await import("./lightbox.js");
      lb.initLightbox();
    }

    if (page === "home") {
      const lb = await import("./lightbox.js");
      lb.initLightbox();
    }
  } catch (e) {
    console.error(e);
    document.body.classList.add("page-visible");
  }
});
