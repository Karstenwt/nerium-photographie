export function initTabs() {
  const tabs = document.querySelectorAll(".tab");
  const galleries = document.querySelectorAll(".portfolio-gallery");

  if (!tabs.length || !galleries.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const target = tab.getAttribute("data-target");
      galleries.forEach((g) => {
        g.classList.remove("active");
        if (g.id === target) g.classList.add("active");
      });
    });
  });
}
