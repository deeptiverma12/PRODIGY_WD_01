const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("header, section");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

// Scroll effect for navbar + active links
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 70;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Hamburger toggle
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Reveal animations on scroll
const reveals = document.querySelectorAll(".fade-in, .slide-up");

window.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});
