// NAVIGATION FUNCTIONALITY
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav_links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("nav__links_active");
  burger.classList.toggle("toggle");
});
