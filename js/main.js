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
    /* ⬇️ CRITIQUE : on attend les fonts */
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }

    /* ⬇️ CRITIQUE : on autorise l’affichage de la nav */
    document.body.classList.add("fonts-loaded");

    await loadComponent("#header", "../components/header.html");
    await loadComponent("#footer", "../components/footer.html");

    initNav();
    initRevealOnScroll();
  } catch (e) {
    console.error(e);
  }
});
