"use strict";

const scrollButton = document.querySelector("#up");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 200) {
    scrollButton.style.opacity = "1";
  } else {
    scrollButton.style.opacity = "0";
  }
});
