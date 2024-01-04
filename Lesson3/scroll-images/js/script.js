"use strict";

const imgElement = document.getElementById("din");
const scrollTopThreshold1 = 200;
const scrollTopThreshold2 = 300;
const scrollTopThreshold3 = 600;

window.onscroll = function () {
  const scrollTop = document.documentElement.scrollTop;

  if (scrollTop > scrollTopThreshold1) {
    showImage();
  }

  if (scrollTop < scrollTopThreshold2) {
    setImageSource("./images/m1.jpg");
  }

  if (scrollTop > scrollTopThreshold2) {
    setImageSource("./images/m2.jpg");
  }

  if (scrollTop > scrollTopThreshold3) {
    setImageSource("./images/m3.jpg");
  }
};

function showImage() {
  if (imgElement.classList.contains("hide")) {
    imgElement.classList.remove("hide");
  }
}

function setImageSource(src) {
  imgElement.src = src;
}
