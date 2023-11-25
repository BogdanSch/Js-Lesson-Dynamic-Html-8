"use strict";

const imagePathes = [
  "./images/uk.jpg",
  "./images/landscape-mountains.webp",
  "./images/landscape-snow.jpg",
  "./images/landscape-desert.jpg",
];

let currentSlide = 0;
let timer;

const sliderImage = document.getElementById("sliderImage");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("prev");

const startSlideshowButton = document.getElementById("start");
const stopSlideshowButton = document.getElementById("stop");

const miniatures = document.querySelectorAll(".minies .mini");

function showNextSlide() {
  currentSlide++;
  if (currentSlide >= imagePathes.length) {
    currentSlide = 0;
  }
  sliderImage.src = imagePathes[currentSlide];
}

function showPreviousSlide() {
  currentSlide--;
  if (currentSlide <= 0) {
    currentSlide = imagePathes.length - 1;
  }
  sliderImage.src = imagePathes[currentSlide];
}

function showNextSlideByMiniature(event) {
  let imageMini = event.target;
  let imageFullName = imageMini.getAttribute("data-sl-img");
  sliderImage.src = `./images/${imageFullName}`;
}

nextButton.addEventListener("click", showNextSlide);
previousButton.addEventListener("click", showPreviousSlide);

startSlideshowButton.addEventListener("click", () => {
  timer = setInterval(showNextSlide, 3000);
});

stopSlideshowButton.addEventListener("click", () => {
  clearInterval(timer);
});

miniatures.forEach((miniature) => {
  miniature.addEventListener("click", showNextSlideByMiniature);
});
