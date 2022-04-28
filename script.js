const firstColor = document.getElementById('black');
const secondColor = document.getElementById('red');
const thirdColor = document.getElementById('blue');
const fourthColor = document.getElementById('green');
const pixelGrade = document.getElementsByClassName('pixel');

function addRemClasse(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

firstColor.addEventListener('click', addRemClasse);
secondColor.addEventListener('click', addRemClasse);
thirdColor.addEventListener('click', addRemClasse);
fourthColor.addEventListener('click', addRemClasse);

function adicionaClasse(event) {
  const selected = document.querySelector('.selected');
  const changeColor = window.getComputedStyle(selected).backgroundColor;
  event.target.style.backgroundColor = changeColor;
}
// https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle

for (const pixel of pixelGrade) {
  pixel.addEventListener('click', adicionaClasse);
}
