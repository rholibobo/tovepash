document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const navLinks = document.querySelectorAll("#mobile-nav a");

  // Toggle mobile navigation menu
  menuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
  });

  // Close mobile navigation menu when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (!mobileNav.classList.contains("hidden")) {
        mobileNav.classList.add("hidden");
      }
    });
  });
});

const sectors = [
  "Energy",
  "Logistics",
  "Education",
  "Manufacturing",
  "Real Estate",
  "Oil & Gas",
  "Foundation",
  "Finance",
  "Agriculture",
  "Engineering & Construction",
  // "and more..."
];

const container = document.getElementById("sectors-container");

const sectorsHTML = sectors.map(
  (sector) =>
    `<div class="text-sm md:text-base text-nowrap flex items-center justify-center py-3 px-6 text-blue rounded-4xl border border-[#E6E6F3]">${sector}</div>`
);

const sectorsHTMLString = sectorsHTML.join("");

container.innerHTML = sectorsHTMLString;

const lastChild = container.lastElementChild;
if (lastChild) {
  lastChild.classList.add("col-span-2");
}


