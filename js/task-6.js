const valueBoxes = document.querySelector('input[type="number"]');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const box = document.querySelector('#boxes');

buttonCreate.classList.add('button-create');
buttonDestroy.classList.add('button-destroy');
valueBoxes.classList.add('valueBoxes');
box.classList.add('boxes')

buttonCreate.addEventListener('click', () => {
  const value = valueBoxes.value;

  const valueMax = Number(valueBoxes.max);
  const valueMin = Number(valueBoxes.min);

  if (value <= valueMax && value >= valueMin) {
    createBoxes(value);
  };

  valueBoxes.value = '';
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function createBoxes(value) {
  box.innerHTML = '';
  let sizeBox = 30;
  const boxesArray = [];

  for (let i = 1; i <= value; i++) {
    let newBox = document.createElement('div');

    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.width = `${sizeBox}px`;
    newBox.style.height = `${sizeBox}px`;
    boxesArray.push(newBox);

    sizeBox += 10;
  };

  box.append(...boxesArray);

};

buttonDestroy.addEventListener('click', () => {
  box.innerHTML = ''
});