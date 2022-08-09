let userNameInput = prompt("Enter your username");
let  userName = document.querySelector('.user');
userName.innerHTML = userNameInput + " :  ";

let rockBtn = document.querySelector('.rock');
let paperBtn = document.querySelector('.paper');
let scissorsBtn = document.querySelector('.scissors');
let resultDisplay = document.querySelector('.display');
let userCounter = 0, computerCounter = 0;
let userScore = document.querySelector('.userscoredisplay');
let computerScore = document.querySelector('.computerscore');
let child = document.querySelector('.result');
let link = document.createElement('div');
link.setAttribute("class", "v2h2")
link.innerHTML = `<a href="./index.html">Play Again</a>`

function userInput(number) {
     switch(number){
          case 1:
               return rockBtn.value;
               break;

          case 2:
               return paperBtn.value;
               break;
          
          case 3:
               return scissorsBtn.value;
               break;
          
          default:
               break;
     }
}

function computerPlay() {
     let number = Math.floor(Math.random() * 3)
     switch(number){
          case 0:
               return "ROCK"
               break;

          case 1:
               return "PAPER"
               break;

          case 2:
               return "SCISSORS"
               break;
          
          default:
               break;
     }
}

function playRound(playerSelection, computerSelection) {
     switch (playerSelection){
          case "ROCK":
               if (computerSelection == "ROCK" ){
                    resultDisplay.innerHTML = "<p>Draw! You both selected Rock.</p>";
                    counter("DRAW");
               }
               if (computerSelection == "PAPER"){
                    resultDisplay.innerHTML = "<p>You lose! Computer selected Paper. Paper beats Rock.</p>";
                    counter("COMPUTER");
               }
               if (computerSelection == "SCISSORS"){
                    resultDisplay.innerHTML = "<p>You won! Rock beats Scissors.</p>";
                    counter("USER");
               }
               break;

               case "PAPER":
               if (computerSelection == "ROCK" ){
                    resultDisplay.innerHTML = "<p>You won! Paper beats Rock.</p>";
                    counter("USER");
               }
               if (computerSelection == "PAPER"){
                    resultDisplay.innerHTML = "<p>Draw! You both selected Paper.</p>";
                    counter("DRAW");
               }
               if (computerSelection == "SCISSORS"){
                    resultDisplay.innerHTML = "<p>You lose! Computer selected Scissors. Scissors beats Paper.</p>";
                    counter("COMPUTER");
               }
               break;

               case "SCISSORS":
               if (computerSelection == "ROCK" ){
                    resultDisplay.innerHTML = "<p>You lose! Computer selected Rock. Rock beats Scissors.</p>";
                    counter("COMPUTER");
               }
               if (computerSelection == "PAPER"){
                    resultDisplay.innerHTML = "<p>You won! Paper beats Rock.</p>";
                    counter("USER");
               }
               if (computerSelection == "SCISSORS"){
                    resultDisplay.innerHTML = "<p>Draw! You both selected Scissors.</p>";
                    counter("DRAW");
               }
               break;

          default:
               break;
     }
}

function counter(result) {
     
     switch(result){
          case "USER":
               userCounter += 1;
               userScore.innerHTML = userCounter;
               computerScore.innerHTML = computerCounter;
               
               if(userCounter == 5){
                    resultDisplay.innerHTML = `You won the game.`;
                    child.appendChild(link);
               }
               
               break;
          
          case "COMPUTER":
               computerCounter += 1;
               userScore.innerHTML = userCounter;
               computerScore.innerHTML = computerCounter;
               
               if(computerCounter == 5){
                    resultDisplay.innerHTML = `You lost the game.`;
                    child.appendChild(link);
               }
               
               break;

     }

}