"use strict";

const scrollButton = document.querySelector("#up");

scrollButton.addEventListener("click", () => {
  scrollButton.style.opacity = 1;
});

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 200) {
    scrollButton.style.opacity = "1";
  } else {
    scrollButton.style.opacity = "0";
  }
});