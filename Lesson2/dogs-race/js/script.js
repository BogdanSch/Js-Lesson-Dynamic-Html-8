"use strict";

const minSpeed = 4;

let dog = document.getElementById("dog");
let speed = Math.floor(Math.random() * 10 + minSpeed);
dog.style.animationDuration = "1s, 1s, " + speed + "s";
