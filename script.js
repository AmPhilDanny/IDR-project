// ================================
// Mobile Navigation Toggle
// ================================
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const open = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  // Close menu after clicking a link (mobile UX)
  navMenu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      if (window.innerWidth <= 720) {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    })
  );
}

// ================================
// Active Section Highlight
// ================================
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main[id], section[id]");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (entry.isIntersecting && link) {
        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  },
  { threshold: 0.35 }
);

sections.forEach((sec) => observer.observe(sec));

// ================================
// Fade-In Scroll Animations
// ================================
const fades = document.querySelectorAll(".fade-in");
const fadeObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("show");
    });
  },
  { threshold: 0.25 }
);
fades.forEach((el) => fadeObs.observe(el));

// ================================
// Scroll Progress Bar
// ================================
const progressBar = document.getElementById("progress-bar");
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  if (progressBar) progressBar.style.width = progress + "%";
});

// ================================
// Back to Top Button
// ================================
const backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  if (!backToTop) return;
  if (window.scrollY > 500) backToTop.classList.add("show");
  else backToTop.classList.remove("show");
});

// ================================
// Parallax Hero Graphic
// ================================
const heroGraphic = document.querySelector(".hero-graphic");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (heroGraphic && !reduceMotion) {
  window.addEventListener("scroll", () => {
    const offset = window.scrollY * 0.15;
    heroGraphic.style.transform = `translateY(${offset}px)`;
  });
}

// ================================
// Dark Mode Toggle (with preference memory)
// ================================
const darkBtn = document.getElementById("dark-toggle");

// Init from localStorage or system preference
(function initTheme() {
  const stored = localStorage.getItem("idr-theme");
  if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
    if (darkBtn) {
      darkBtn.setAttribute("aria-pressed", "true");
      darkBtn.textContent = "☀️";
    }
  }
})();

// Toggle on click
if (darkBtn) {
  darkBtn.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    darkBtn.setAttribute("aria-pressed", String(isDark));
    darkBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("idr-theme", isDark ? "dark" : "light");
  });
}