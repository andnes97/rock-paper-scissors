function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissor"];
    let computerSelection = options[Math.floor(Math.random() * options.length)];
    
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    let result = "No result";
    if ((playerSelection === "Rock" && computerSelection === "Scissor") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissor" && computerSelection === "Paper")) {
        result = `You win! ${playerSelection} beats ${computerSelection}`;
    
    } else if ((playerSelection === "Scissor" && computerSelection === "Rock") ||
        (playerSelection === "Rock" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Scissor")) {
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
    
    } else if (playerSelection === computerSelection) {
        result = `It's a draw! You both selected ${playerSelection}`;
    
    } else {
        result = "Something went wrong!";
    }

    return result;
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));