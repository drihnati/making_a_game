const textPlayer = document.querySelector('#textPlayer');
const textComputer = document.querySelector('#textComputer');
const textResult = document.querySelector('#textResult');
const pressBtns = document.querySelectorAll('.pressBtn');
let player;
let computer;
let result;

pressBtns.forEach(button => button.addEventListener("click", () => {

  player = button.textContent;
  computerTurn(); 
  textPlayer.textContent = `Player: ${player}`;
  textComputer.textContent = `Computer: ${computer}`;
  textResult.textContent = displayWinner();
}));


function computerTurn(){

const randomNum = Math.floor(Math.random() * 3) + 1;

switch(randomNum){
  case 1:
  computer = "Rock";
  break;
  case 2:
  computer = "Paper";
  break;
  case 3:
    computer = "Scissors";
    break;
}
}

function displayWinner(){
  if(player === computer){
  return "Draw!";
}
  else if(computer === "Rock") {
    return(player === "Paper") ? "You Win!" : "You Lose!"
}
else if(computer === "Paper") {
  return(player === "Scissors") ? "You Win!" : "You Lose!"
}
else if(computer === "Scissors") {
  return(player ==="Rock") ? "You Win!" : "You Lose!"
}
}