function getComputerChoice() {
    let options = ["rock", "paper", "scissor"];
    let computerSelection = options[Math.floor(Math.random() * options.length)];
    console.log("computerSelection: " + computerSelection);
    return computerSelection;
}

// playRound(playerSelection, computerSelection)
// return String announcing winner

