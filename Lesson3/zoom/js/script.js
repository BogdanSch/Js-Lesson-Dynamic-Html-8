"use strict";

function magnify(imgID, zoom) {
  const img = document.getElementById(imgID);
  const glass = createMagnifierGlass(img);

  img.parentElement.appendChild(glass);

  glass.style.backgroundImage = `url('${img.src}')`;
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = `${img.width * zoom}px ${img.height * zoom}px`;

  const { width: w, height: h } = glass.style;

  img.addEventListener("mousemove", moveMagnifier);

  function moveMagnifier(event) {
    event.preventDefault();

    let x = event.offsetX;
    let y = event.offsetY;

    x = Math.min(Math.max(x, w / zoom), img.width - w / zoom);
    y = Math.min(Math.max(y, h / zoom), img.height - h / zoom);

    glass.style.backgroundPosition = `-${x * zoom - w}px -${y * zoom - h}px`;
  }
}

function createMagnifierGlass(img) {
  const glass = document.createElement("DIV");
  glass.setAttribute("class", "glass");
  return glass;
}

magnify("wrap-image", 3);
