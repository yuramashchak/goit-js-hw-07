const nameColor = document.querySelector('.color')
const newColor = document.querySelector('.change-color')
newColor.addEventListener('click', randomColor)
function randomColor(e){
  const color = getRandomHexColor();

  document.body.style.backgroundColor = color;
  nameColor.textContent = color;
}


function getRandomHexColor(e) {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
