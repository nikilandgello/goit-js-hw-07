const buttonColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

buttonColor.addEventListener('click', () => {
  const color = getRandomHexColor();

  document.body.style.backgroundColor = color;
  spanColor.textContent = color;
})
