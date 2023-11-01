function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissor"];
    let computerSelection = options[Math.floor(Math.random() * options.length)];
    console.log("computerSelection: " + computerSelection);
    
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    let result = "No result";
    switch (playerSelection, computerSelection) {
        case "Rock", "Scissor":
        case "Paper", "Rock":
        case "Scissor", "Paper":
            result = `You win! ${playerSelection} beats ${computerSelection}`;
            break;
        
        case "Scissor", "Rock":
        case "Rock", "Paper":
        case "Paper", "Scissor":
            result = `You lose! ${computerselection} beats ${playerSelection}`;
            break;
        
        case "Rock", "Rock":
        case "Paper", "Paper":
        case "Scissor", "Scissor":
            result = `It's a draw! You both selected ${playerSelection}`;
            break;
        
        default:
            result = "Something went wrong!";
            break;
    }
    console.log(result);
    return result;
}
// return String announcing winner

playRound();