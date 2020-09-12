let startBtn = document.getElementById('start-button');
let restartBtn = document.getElementById('restart-button');
let winner = document.getElementById('winner-section');
let game = document.getElementById('game-body');
let description = document.getElementById('game-description');
let square = document.getElementsByClassName('game-square');
let valueOfPlayer1 = '<img class="children" src="images/x.png" style="width: 30px;">'
let valueOfPlayer2 = '<img class="children" src="images/O.png" style="width: 30px;">'
let count, gameOn = true;

function start(){
  let descriptionStart = "starting with player 1";
  game.style.display = 'initial'
  document.getElementById('title-description').style.display = "none";
  startBtn.style.display = 'none'
  if(count === undefined || count >= 9){
    count = 0;
    description.innerHTML = descriptionStart;
  }
}

function play(p){
  let position = "p"+p;
  let description1 = `Turn ${valueOfPlayer1}`; 
  let description2 = `Turn ${valueOfPlayer2}`;
  let mark = document.querySelector(`#p${p} > .children`);
  if (count % 2 === 1 && mark === null){
    count++;
    description.innerHTML = description1;
  }else if (count % 2 === 0){
    count++;
    description.innerHTML = description2;
  }
  if (gameOn === true){
    if (count % 2 === 1 && mark === null){
      document.getElementById(`${position}`).innerHTML = `${valueOfPlayer1}`
    }
    if (count % 2 === 0 && mark === null){
      document.getElementById(`${position}`).innerHTML = `${valueOfPlayer2}`
    }
  }
  verify();
}

function verify(){

  let phraseWinnerX = `Vencedor: ${valueOfPlayer1} !`
  let phraseWinnerO = `Vencedor: ${valueOfPlayer2} !`

  let position = document.querySelectorAll(`.game-square`);
  // Logic X
  if(count % 2 === 1 && // top lign
    position[0].innerHTML === valueOfPlayer1 &&
    position[1].innerHTML === valueOfPlayer1 &&
    position[2].innerHTML === valueOfPlayer1 ||
    count % 2 === 1 && // diagonal of left to right
    position[0].innerHTML === valueOfPlayer1 &&
    position[4].innerHTML === valueOfPlayer1 &&
    position[8].innerHTML === valueOfPlayer1 ||
    count % 2 === 1 && // right lign
    position[0].innerHTML === valueOfPlayer1 &&
    position[3].innerHTML === valueOfPlayer1 &&
    position[6].innerHTML === valueOfPlayer1 ||
    count % 2 === 1 && // left lign
    position[2].innerHTML === valueOfPlayer1 &&
    position[5].innerHTML === valueOfPlayer1 &&
    position[8].innerHTML === valueOfPlayer1 ||
    count % 2 === 1 && // middle lign
    position[1].innerHTML === valueOfPlayer1 &&
    position[4].innerHTML === valueOfPlayer1 &&
    position[7].innerHTML === valueOfPlayer1 ||
    count % 2 === 1 && // middle lign
    position[3].innerHTML === valueOfPlayer1 &&
    position[4].innerHTML === valueOfPlayer1 &&
    position[5].innerHTML === valueOfPlayer1 ||
    count % 2 === 1 && // bottom lign
    position[6].innerHTML === valueOfPlayer1 &&
    position[7].innerHTML === valueOfPlayer1 &&
    position[8].innerHTML === valueOfPlayer1 ||
    count % 2 === 1 && // Diagonal of right to left
    position[2].innerHTML === valueOfPlayer1 &&
    position[4].innerHTML === valueOfPlayer1 &&
    position[6].innerHTML === valueOfPlayer1 ){
      winner.innerHTML = phraseWinnerX;
      gameOn = false;
      restartBtn.style.display = 'initial';
      // Logic "O"
    }else if(count % 2 === 0 && // Top
      position[0].innerHTML === valueOfPlayer2 &&
      position[1].innerHTML === valueOfPlayer2 &&
      position[2].innerHTML === valueOfPlayer2 ||
      count % 2 === 0 && // Diagonal of left to right
      position[0].innerHTML === valueOfPlayer2 &&
      position[4].innerHTML === valueOfPlayer2 &&
      position[8].innerHTML === valueOfPlayer2 ||
      count % 2 === 0 && // right lign
      position[0].innerHTML === valueOfPlayer2 &&
      position[3].innerHTML === valueOfPlayer2 &&
      position[6].innerHTML === valueOfPlayer2 ||
      count % 2 === 0 && // left lign
      position[2].innerHTML === valueOfPlayer2 &&
      position[5].innerHTML === valueOfPlayer2 &&
      position[8].innerHTML === valueOfPlayer2 ||
      count % 2 === 0 && // middle lign
      position[1].innerHTML === valueOfPlayer2 &&
      position[4].innerHTML === valueOfPlayer2 &&
      position[7].innerHTML === valueOfPlayer2 ||
      count % 2 === 0 && // middle lign
      position[3].innerHTML === valueOfPlayer2 &&
      position[4].innerHTML === valueOfPlayer2 &&
      position[5].innerHTML === valueOfPlayer2 ||
      count % 2 === 0 && // bottom lign
      position[6].innerHTML === valueOfPlayer2 &&
      position[7].innerHTML === valueOfPlayer2 &&
      position[8].innerHTML === valueOfPlayer2 ||
      count % 2 === 0 && // Diagonal of right to left
      position[2].innerHTML === valueOfPlayer2 &&
      position[4].innerHTML === valueOfPlayer2 &&
      position[6].innerHTML === valueOfPlayer2 ){
        winner.innerHTML = phraseWinnerO;
        gameOn = false;
        restartBtn.style.display = 'initial';
      }else if(count === 9){
        winner.innerHTML = 'We tied.';
        restartBtn.style.display = 'initial';
      }
    }
    
function restart(){
  for(let clear = 0; clear < 9; clear ++){
    square[clear].innerHTML = '';
  }
  gameOn = true;
  count = 0;
  winner.innerHTML = '';
  restartBtn.style.display = 'none';
  description.innerHTML = `Turn ${valueOfPlayer1}`;
  // start();
}  
