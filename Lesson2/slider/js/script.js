"use strict";

const imagePathes = [
  "./images/flowers.jpg",
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

const effectsForm = document.forms.effects;
// const setEffectButton = effectsForm.querySelector(".btn-set-effect");
let effect = "none";

const miniatures = document.querySelectorAll(".minies .mini");

for (let i = 0; i < effectsForm.length; i++) {
  effectsForm[i].addEventListener("change", (event) => {
    effect = event.value;
    if (effect) {
      clearEffects();
      addEffect();
    }
  });
}
// effectsForm.forEach((element) => {
//   element.addEventListener("change", () => {
//     effect = element.value;
//     clearEffects();
//     addEffect();
//   });
// });
// setEffectButton.addEventListener("click", getEffect);

// function getEffect() {
//   for (let i = 0; i < effectsForm.length; i++) {
//     if (effectsForm[i].checked) {
//       effect = effectsForm[i].value;
//     }
//   }
// }

function addEffect() {
  sliderImage.classList.add(effect);
}

function clearEffects() {
  sliderImage.classList = {};
}

nextButton.addEventListener("click", showNextSlide);
previousButton.addEventListener("click", showPreviousSlide);
startSlideshowButton.addEventListener("click", startSlideshow);
stopSlideshowButton.addEventListener("click", stopSlideshow);

function startSlideshow() {
  stopSlideshow();
  timer = setInterval(showNextSlide, 3000);
}
function stopSlideshow() {
  clearInterval(timer);
}

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

miniatures.forEach((miniature) => {
  miniature.addEventListener("click", showNextSlideByMiniature);
});

function showNextSlideByMiniature(event) {
  let imageMini = event.target;
  let imageFullName = imageMini.getAttribute("data-sl-img");
  sliderImage.src = `./images/${imageFullName}`;
}
