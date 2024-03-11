const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');

btn.addEventListener('click', changeColor);

function changeColor(event) {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = `${body.style.backgroundColor}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
