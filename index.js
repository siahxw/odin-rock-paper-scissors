function computerPlay() {
    let number = Math.floor(Math.random() * 3) // Generates a random number from 0 to 2.
    switch(number) {
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
/* The computerPlay function

There are three possible conditions.
If number equals 0 then "Rock" will be returned; if number equals
1 then "Paper" will be returned; if number equals 2 then "Scissors"
will be returned */
    }
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "ROCK":
            if (computerSelection == "ROCK") {
                console.log("Draw! You both selected Rock.")
                return "DRAW"
            }
            if (computerSelection == "PAPER") {
                console.log("You lose! Computer selected Paper. Paper beats Rock.")
                return "COMPUTER"
            }
            if (computerSelection == "SCISSORS") {
                console.log("You won! Rock beats Scissors.")
                return "USER"
            }
            break;
    }

    switch (playerSelection) {
        case "PAPER":
            if (computerSelection == "ROCK") {
                console.log("You won! Paper beats Rock.")
                return "USER"
            }
            if (computerSelection == "PAPER") {
                console.log("Draw! You both selected Paper.")
                return "DRAW"
            }
            if (computerSelection == "SCISSORS") {
                console.log("You lose! Computer selected Scissors. Scissors beats Paper.")
                return "COMPUTER"
            }
            break;
    }

    switch (playerSelection) {
        case "SCISSORS":
            if (computerSelection == "ROCK") {
                console.log("You lose! Computer selected Rock. Rock beats Scissors.")
                return "COMPUTER"
            }
            if (computerSelection == "PAPER") {
                console.log("You won! Scissors beats Rock.")
                return "USER"
            }
            if (computerSelection == "SCISSORS") {
                console.log("Draw! You both selected Scissors.")
                return "DRAW"
            }
            break;
            
        default:
            break;
    }
}

function game() {
    let userCounter = 0;
    let computerCounter = 0;

    for(i = 0; i < 5; i++) {
        let userinput = prompt("Select Rock, Paper, or Scisssors");
        userinput = userinput.toUpperCase();
        let result = playRound(userinput, computerPlay());
        /* The variable equals 0 before the loop starts.
        For the loop to run, i must be less than 5.
        Each time the code block in the loop has been executed,
        i increases in value by 1. */
        
        if(result == "DRAW") {
            result = "";
            continue;
        }

        else if (result == "USER") {
            result = "";
            userCounter = userCounter + 1;
        }

        else if (result == "COMPUTER") {
            result = ""
            computerCounter = computerCounter + 1;
        }

        if(userCounter == 5) {
            console.log("You won the game");
            break;
        }

        else if (computerCounter == 5) {
            console.log("You lost the game.");
        }
    }
}

game();