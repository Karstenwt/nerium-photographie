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
    links.classList.toggle("open");
  });
}

function initRevealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach((el) => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }

    document.body.classList.add("fonts-loaded");

    /* 🔑 HEADER / FOOTER — chemins intelligents */
    const depth = location.pathname.split("/").length - 2;
    const prefix = "../".repeat(depth);

    await loadComponent("#header", `${prefix}components/header.html`);
    await loadComponent("#footer", `${prefix}components/footer.html`);

    initNav();
    initRevealOnScroll();
  } catch (e) {
    console.error(e);
  }
});
