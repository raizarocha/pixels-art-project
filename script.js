// let pixel = document.getElementsByClassName('pixel');
// console.log(pixel);

// let linha = 5;
// let coluna = 5;

// for (let index = 0; index < linha; index += 1) {
//     pixel +=1;
//     console.log(pixel)
//     for (let index = 0; index < coluna; index += 1) {
//         pixel +=1;
//         console.log(pixel);
//     }
// }
// const pixel = document.querySelectorClass('pixel');
// pixel.style.color = 'green';
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

for (const pixel of pixelGrade) {
  pixel.addEventListener('click', adicionaClasse);
}
