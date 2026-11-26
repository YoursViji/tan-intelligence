const nav = document.querySelector(".nav");
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

window.addEventListener("scroll", () => {
  nav?.classList.toggle("scrolled", window.scrollY > 24);
});

navToggle?.addEventListener("click", () => {
  navLinks?.classList.toggle("open");
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
