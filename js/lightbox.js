export function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;

  const imgEl = lightbox.querySelector(".lightbox-image");
  const closeBtn = lightbox.querySelector(".lightbox-close");
  const backdrop = lightbox.querySelector(".lightbox-backdrop");

  function open(src, alt = "") {
    imgEl.src = src;
    imgEl.alt = alt;
    lightbox.classList.add("show");
  }

  function close() {
    lightbox.classList.remove("show");
    imgEl.src = "";
    imgEl.alt = "";
  }

  document.addEventListener("click", (e) => {
    const img = e.target.closest("img[data-lightbox]");
    if (img) open(img.src, img.alt || "");
  });

  closeBtn?.addEventListener("click", close);
  backdrop?.addEventListener("click", close);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}
