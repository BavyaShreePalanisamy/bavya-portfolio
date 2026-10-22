const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const themeBtn = document.getElementById("themeBtn");

// Mobile menu
menuBtn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");

  menuBtn.setAttribute("aria-expanded", String(isOpen));
  menuBtn.setAttribute(
    "aria-label",
    isOpen ? "Close menu" : "Open menu"
  );
  menuBtn.textContent = isOpen ? "✕" : "☰";
});

// Close mobile menu after navigation
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open menu");
    menuBtn.textContent = "☰";
  });
});

// Light and dark theme
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  themeBtn.textContent = isDark ? "☀️" : "🌙";
  themeBtn.setAttribute(
    "aria-label",
    isDark ? "Switch to light theme" : "Switch to dark theme"
  );
});

// Project filters
const filterButtons = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach(card => {
      card.hidden =
        filter !== "all" && card.dataset.category !== filter;
    });
  });
});

// Contact form validation
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", event => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  formStatus.textContent =
    "Thank you! Your details are valid. No email was sent by this demo.";

  contactForm.reset();
});

// Current year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Back to top
document.getElementById("topBtn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Active navigation link
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav a");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          const active =
            link.getAttribute("href") === "#" + entry.target.id;

          link.classList.toggle("active", active);
        });
      }
    });
  }, { rootMargin: "-25% 0px -60% 0px" });

  sections.forEach(section => observer.observe(section));
}script.js
