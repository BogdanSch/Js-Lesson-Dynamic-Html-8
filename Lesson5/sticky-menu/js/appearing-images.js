"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".article__item img");

  function isInViewport(element, offset = 400) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= -offset &&
      rect.left >= -offset &&
      rect.bottom <= document.documentElement.clientHeight + offset &&
      rect.right <= document.documentElement.clientWidth + offset
    );
  }

  function handleImageChange() {
    images.forEach((image) => {
      if (isInViewport(image)) {
        const dataSrc = image.getAttribute("data-img-src");
        if (dataSrc && image.src !== dataSrc) {
          image.src = dataSrc;
        }
      }
    });
  }

  handleImageChange();
  window.addEventListener("scroll", handleImageChange);
});
