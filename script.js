"use strict";

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

// Change focus of service items on click
const serviceButtons = document.querySelector(".service-buttons");
const serviceBtns = document.querySelectorAll(".service-btns");
const serviceItem = document.querySelectorAll(".service-item");

let activeBtns = [];

// Project services filter
serviceBtns.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    // service buttons active
    if (activeBtns.length < 2 && !activeBtns.includes(btn)) {
      btn.classList.add("service-btn-active");
      activeBtns.push(btn);
    } else if (activeBtns.includes(btn)) {
      btn.classList.remove("service-btn-active");
      activeBtns = activeBtns.filter((activeBtn) => activeBtn !== btn);
    }

    serviceItem.forEach((item) => {
      const itemAtr = item.dataset.item;
      if (activeBtns.length === 0) {
        item.classList.remove("service-item-blur");
      } else if (
        activeBtns.length === 1 &&
        activeBtns[0].dataset.filter === itemAtr
      ) {
        item.classList.remove("service-item-blur");
      } else if (
        activeBtns.length === 2 &&
        activeBtns[0].dataset.filter === itemAtr
      ) {
        item.classList.remove("service-item-blur");
      } else if (
        activeBtns.length === 2 &&
        activeBtns[1].dataset.filter === itemAtr
      ) {
        item.classList.remove("service-item-blur");
      } else {
        item.classList.add("service-item-blur");
      }
    });
  });
});
