const controls = document.querySelector('#controls');
const input = document.querySelector('input[type="number"]');
input.classList.add('input-quantity');
const createBtn = document.querySelector('button[data-create]');
createBtn.classList.add('create-btn');
const destroyBtn = document.querySelector('button[data-destroy]');
destroyBtn.classList.add('destroy-btn');
const boxes = document.querySelector('#boxes');

// console.log(input);
//input.addEventListener('input', getAmountInput);
createBtn.addEventListener('click', () => {
  const amount = input.value;
  console.log(amount);

  if (amount > 1 || amount < 100) {
    destroyBoxes();
    let arrayBoxes = [];
    for (let i = 0; i < amount; i++) {
      arrayBoxes.push(createBoxes(i));
    }
    // console.log(arrayBoxes);

    boxes.append(...arrayBoxes);
    input.value = '';
  }
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const box = document.createElement('div');
  box.style.width = `${30 + amount * 10}px`;
  box.style.height = `${30 + amount * 10}px`;
  box.style.backgroundColor = getRandomHexColor();
  return box;
}
console.log(box);

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
