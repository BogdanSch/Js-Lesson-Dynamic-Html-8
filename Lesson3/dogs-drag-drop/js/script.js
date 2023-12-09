const irises = document.getElementsByTagName("img");
for (let i = 0; i < irises.length; i++) {
  irises[i].onmousedown = go;
}

function go(e) {
  // Ірис, на якому сталася подія натискання миші
  let flower = document.getElementById(e.target.id);
  let breed = flower.dataset.breed; // зчитуємо сорт квітки

  let coords = getCoords(flower);
  // shiftX - зсув курсора від лівого краю картинки
  let shiftX = e.pageX - coords.left;
  // shiftY - зсув курсора від верхнього краю картинки
  let shiftY = e.pageY - coords.top;

  // подія переміщення миші
  document.onmousemove = function (e) {
    moveAt(e);
  };

  // функція переміщення об'єкта під координати курсору
  function moveAt(e) {
    // shiftX и shiftY - зсув курсора щодо верхнього лівого кута картинки
    let left = e.pageX - shiftX;
    let top = e.pageY - shiftY;
    flower.style.left = left + "px";
    flower.style.top = top + "px";

    // Координати зображення щодо вікна записуємо в полі showCoords
    showCoords.innerHTML =
      "x: " + flower.style.left + " y: " + flower.style.top;

    // перевірка, чи попадає на поле tan квітка з координатами left, top
    if (onField(tan, left, top)) {
      if (breed == "tan") tan.style.border = "2px green solid";
      else tan.style.border = "2px red solid";
    }

    // перевірка, чи попадає на поле pink квітка з координатами left, top
    if (onField(pink, left, top)) {
      if (breed == "pink") pink.style.border = "2px green solid";
      else pink.style.border = "2px red solid";
    }
  }

  // подія відпускання миші
  flower.onmouseup = function (event) {
    // отримуємо координати квітки
    let left = parseInt(flower.style.left);
    let top = parseInt(flower.style.top);

    // перевірка, чи попадає на поле tan квітка з координатами left, top
    if (onField(tan, left, top)) {
      state.innerHTML =
        flower.id + " сорт " + breed + " відпускаємо на поле tan!"; // записуємо у поле state
    } else {
      state.innerHTML =
        flower.id + " сорт " + breed + " відпускаємо поза полем tan!";
      tan.style.border = "none";
    }
    // перевірка, чи попадає на поле pink квітка з координатами left, top
    if (onField(pink, left, top)) {
      state.innerHTML =
        flower.id + " сорт " + breed + " відпускаємо на поле pink!";
    } else {
      state.innerHTML =
        flower.id + " сорт " + breed + " відпускаємо поза полем pink!";
      pink.style.border = "none";
    }
    document.onmousemove = null;
    flower.onmouseup = null;
  };

  flower.ondragstart = function () {
    return false; // відміна drag and drop браузера
  };
}

// функція повертає розмір елемента та його координати щодо об'ємного елемента.
function getCoords(elem) {
  let box = elem.getBoundingClientRect();
  // pageYOffset та pageXOffset повертають скролювання вікна в пікселях
  return {
    height: box.height,
    width: box.width,
    top: box.top + pageYOffset,
    left: box.left + pageXOffset,
  };
}
