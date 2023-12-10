"use strict";

window.onload = function () {
  let menu = document.querySelector("nav");
  let menuBottom = 100; // значення відступу від верхнього краю при прокрутці
  window.onscroll = function () {
    if (document.documentElement.scrollTop < menuBottom) {
      // або document.body.scrollTop > menuBottom
      menu.classList.remove("fixed"); // видаляємо клас 'fixed'
    } else {
      menu.classList.add("fixed"); // додаємо клас 'fixed'
    }
  };
};
