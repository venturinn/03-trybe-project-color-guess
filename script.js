const balls = document.getElementsByClassName('ball');
const button = document.getElementById('reset-game');
const rgb = document.getElementById('rgb-color');
const allBalls = document.getElementById('cores');
const answer = document.getElementById('answer');


let cores;
let corEscolhida;

function colorBalls() {
  cores = [];
  for (let i = 0; i < balls.length; i += 1) {
    const r = String(Math.trunc(Math.random() * 256));
    const g = String(Math.trunc(Math.random() * 256));
    const b = String(Math.trunc(Math.random() * 256));
    const cor = (`${'rgb('}${r},${g},${b})`);
    cores.push(cor);
    balls[i].style.backgroundColor = cor;
  }
}

function secretColor() {
  const playDice = Math.trunc(Math.random() * 6);
  corEscolhida = cores.splice(playDice, 1);
  let onlyNumbers = corEscolhida[0].slice(3);
  rgb.innerText=onlyNumbers
}

colorBalls();

function playAgain() {
  answer.innerText = 'Escolha uma cor';
  colorBalls();
  secretColor();
  }
button.addEventListener('click', playAgain);

function result (event){

const ballClicked = event.target;

console.log(corEscolhida[0])
console.log(ballClicked.style.backgroundColor);

if (ballClicked.style.backgroundColor === corEscolhida[0]){

    answer.innerText = 'Acertou!';
    
}else{

    answer.innerText = 'Errou! Tente novamente!';
}




}


allBalls.addEventListener('click', result);


colorBalls();
secretColor()