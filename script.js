// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active");
});

// Hamburger menu disappear click on links
document.querySelectorAll(".nav-list").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navBar.classList.remove("active");
  })
);

// Hamburger menu disappear on click window
window.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navBar.contains(e.target)) {
    hamburger.classList.remove("active");
    navBar.classList.remove("active");
  }
});
