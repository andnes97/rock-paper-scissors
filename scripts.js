function getComputerChoice() {
    let options = ["rock", "paper", "scissor"];
    let computerSelection = options[Math.floor(Math.random() * options.length)];
    
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    let result = "No result";
    if ((playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")) {
        result = `You win! ${playerSelection} beats ${computerSelection}`;
    
    } else if ((playerSelection === "scissor" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissor")) {
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
    
    } else if (playerSelection === computerSelection) {
        result = `It's a draw! You both selected ${playerSelection}`;
    
    } else {
        result = "Something went wrong!";
    }

    return result;
}

function game() {
    console.log("Welcome to Rock-Paper-Scissors! \nPlease enter your choice to start the game.");

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissor?").toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();