"use strict";

function magnify(imgID, zoom) {
  let img, glass, w, h;
  img = document.getElementById(imgID);

  /*создать увеличительное стекло:*/
  glass = document.createElement("DIV");
  glass.setAttribute("class", "glass");

  /*вставить увеличительное стекло перед картинкой:*/
  img.parentElement.appendChild(glass, img);

  /*установить стили для background для увеличительного стекла:*/
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize =
    img.width * zoom + "px " + img.height * zoom + "px";

  /*найти половину ширины и высоты стекла*/
  w = glass.style.width / 2;
  h = glass.style.height / 2;

  /*обработка события перемещения мыши*/
//   glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  /*перемещение увеличительного стекла*/
  function moveMagnifier(event) {
    let x, y;

    /*предотвратить действие по умолчанию*/
    event.preventDefault();

    /*получить координаты курсора*/
    x = event.offsetX;
    y = event.offsetY;

    /*предотвратить позиционирование стекла далеко от картинки*/
    if (x > img.width - w / zoom) {
      x = img.width - w / zoom;
    }
    if (x < w / zoom) {
      x = w / zoom;
    }
    if (y > img.height - h / zoom) {
      y = img.height - h / zoom;
    }
    if (y < h / zoom) {
      y = h / zoom;
    }

    /*поменять позиционирование стекла по координатам мыши:*/
    // glass.style.left = x - w + "px";
    // glass.style.top = y - h + "px";

    /*позиционирование фона*/
    glass.style.backgroundPosition =
      "-" + (x * zoom - w) + "px -" + (y * zoom - h) + "px";
  }
}
magnify("wrap-image", 3);
