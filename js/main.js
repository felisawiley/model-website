document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
let currentIndex = 0;
let activeTriggers = [];

function getCaption(item, img) {
  const caption = item.querySelector("figcaption");
  return caption ? caption.textContent.trim() : "";
}

function openLightbox(triggers, index) {
  activeTriggers = triggers;
  currentIndex = index;
  const item = activeTriggers[currentIndex].closest(".gallery-item");
  const img = activeTriggers[currentIndex].querySelector("img");
  const caption = getCaption(item, img);
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightboxCaption.textContent = caption;
  lightboxCaption.hidden = !caption;
  lightbox.hidden = false;
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.hidden = true;
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  lightboxImg.src = "";
  activeTriggers = [];
}

function showPrev() {
  if (!activeTriggers.length) return;
  currentIndex = (currentIndex - 1 + activeTriggers.length) % activeTriggers.length;
  const item = activeTriggers[currentIndex].closest(".gallery-item");
  const img = activeTriggers[currentIndex].querySelector("img");
  const caption = getCaption(item, img);
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightboxCaption.textContent = caption;
  lightboxCaption.hidden = !caption;
}

function showNext() {
  if (!activeTriggers.length) return;
  currentIndex = (currentIndex + 1) % activeTriggers.length;
  const item = activeTriggers[currentIndex].closest(".gallery-item");
  const img = activeTriggers[currentIndex].querySelector("img");
  const caption = getCaption(item, img);
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightboxCaption.textContent = caption;
  lightboxCaption.hidden = !caption;
}

function initGallery() {
  document.querySelectorAll(".gallery-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const gallery = trigger.closest(".gallery-scroll");
      const triggers = [...gallery.querySelectorAll(".gallery-trigger")];
      const index = triggers.indexOf(trigger);
      openLightbox(triggers, index >= 0 ? index : 0);
    });
  });
}

initGallery();

document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
document.querySelector(".lightbox-prev").addEventListener("click", showPrev);
document.querySelector(".lightbox-next").addEventListener("click", showNext);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (lightbox.hidden) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") showPrev();
  if (e.key === "ArrowRight") showNext();
});
