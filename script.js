const color = document.querySelector(".rgb-code");
const change = document.querySelector(".change");

console.log(change);

function getRandom() {
  return String(Math.floor(Math.random() * 256));
}

change.addEventListener("click", function () {
  const color1 = getRandom();
  const color2 = getRandom();
  const color3 = getRandom();

  currentColor = `rgb(${color1},${color2},${color3})`;
  color.textContent = currentColor;
  document.body.style.backgroundColor = currentColor;
});
