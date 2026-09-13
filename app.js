// DesktopToTrade — small enhancements: mobile nav + waitlist form

// Mobile nav toggle
const toggle = document.getElementById("nav-toggle");
const nav = document.getElementById("site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  // Close menu after tapping a link
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Smooth-scroll for anchor links (CSS smooth-scroll interferes with some tools)
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Reveal on scroll — small, respectful animation
const revealEls = document.querySelectorAll(".reveal");
if (revealEls.length) {
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }, { threshold: 0.18 });
    revealEls.forEach((el) => io.observe(el));
  } else revealEls.forEach((el) => el.classList.add("in"));
}

// Waitlist form (front-end only for now — wire to a backend later)
const form = document.getElementById("signup-form");
const msg = document.getElementById("form-msg");

if (form && msg) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    if (!email) return;

    msg.style.color = "#1c8a4a";
    msg.textContent = "You're on the list — we'll be in touch at " + email + "!";
    form.reset();
  });
}
