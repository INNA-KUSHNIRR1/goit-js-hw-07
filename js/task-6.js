const controls = document.querySelector('#controls');
const input = document.querySelector('input[type="number"]');
input.classList.add('input-quantity');
const createBtn = document.querySelector('button[data-create]');
createBtn.classList.add('create-btn');
const destroyBtn = document.querySelector('button[data-destroy]');
destroyBtn.classList.add('destroy-btn');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', onCreateBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);

function onCreateBtnClick(event) {
  const amount = input.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  if (amount > 1 || amount < 100) {
    onDestroyBtnClick();

    let arrayBoxes = [];
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      arrayBoxes.push(box);
    }

    boxes.append(...arrayBoxes);
    input.value = '';
  }
}

function onDestroyBtnClick() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
