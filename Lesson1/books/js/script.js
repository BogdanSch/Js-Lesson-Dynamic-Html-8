"use strict";

function showBook(event) {
  const title = event.target;
  const nextElementInfo = title.nextElementSibling;

  if (nextElementInfo) {
    title.classList.toggle("minus");
    nextElementInfo.classList.toggle("open");
  }
}

window.onload = function (event) {
  const titles = document.querySelectorAll(".title");

  titles.forEach((title) => {
    title.addEventListener("click", showBook, false);
  });
};
