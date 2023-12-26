let div2 = document.getElementById("div2");
// alert(div2.classList);

const alignButtons = document.querySelectorAll(".btn-align");

alignButtons.forEach((alignButton) => {
  alignButton.addEventListener("click", () => {
    const alignMethod = alignButton.getAttribute("data-align-method");
    div2.style.textAlign = alignMethod;
  });
});

function swap_img() {
  const img = document.getElementById("img");
  const src = img.src;
  console.log(src);
  if (/fl2\.jpg$/.test(src)) {
    img.src = "http://js.web-online.net.ua/fl1.jpg";
  } else {
    img.src = "http://js.web-online.net.ua/fl2.jpg";
  }
}
