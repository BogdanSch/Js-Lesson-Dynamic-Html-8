"use strict";

const labels = document.querySelectorAll("label");
const startValue = 50;

labels.forEach((label) => {
  // let text = label.innerHTML;
  // label.innerHTML = "";
  // for (let i = 0; i < text.length; i++) {
  //   label.innerHTML += `<span style="transition-delay: ${startValue * i}ms">${
  //     text[i]
  //   }</span>`;
  // }
  label.innerHTML = label.innerHTML
    .split("")
    .map((char, i) => {
      return `<span style="transition-delay: ${
        startValue * i
      }ms">${char}</span>`;
    })
    .join("");
});
