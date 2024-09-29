
let humanScore = 0;
let computerScore = 0;

let getComputerChoice = Math.floor(Math.random() * 3);
if (getComputerChoice == 0) {
    //console.log("Computer choice's" + " " + "rock")
    getComputerChoice = "rock";
}
if (getComputerChoice == 1) {
    //console.log("Computer choice's" + " " + "paper")
    getComputerChoice = "paper";
}
if (getComputerChoice == 2) {
    //console.log("Computer choice's" + " " + "scissor")
    getComputerChoice = "scissor";
}

let getHumanChoice = prompt('Enter rock, paper, or scissor');

let userInputRock = /rock/i;
let userInputPaper = /paper/i;
let userInputScissor = /scissor/i;

if (userInputRock.test(getHumanChoice) 
    || userInputPaper.test(getHumanChoice)
    || userInputScissor.test(getHumanChoice)) {
    console.log("You entered" + " " + getHumanChoice.toLowerCase());
} else if (!userInputRock.test(getHumanChoice) 
    || !userInputPaper.test(getHumanChoice)
    || !userInputScissor.test(getHumanChoice)) {
    alert("Please try again. Must reload the page to play again if an invalid choice was entered. Scores will reset.");
} else {console.log("You entered" + " " + getHumanChoice.toLowerCase());}

while (!getHumanChoice) {
    getHumanChoice = prompt('Enter rock, paper, or scissor');
    if (userInputRock.test(getHumanChoice) 
        || userInputPaper.test(getHumanChoice)
        || userInputScissor.test(getHumanChoice)) {
        console.log("You entered" + " " + getHumanChoice.toLowerCase());
    } else if (!userInputRock.test(getHumanChoice) 
        || !userInputPaper.test(getHumanChoice)
        || !userInputScissor.test(getHumanChoice))
    {
        alert("Must reload the page to play again if an invalid choice was entered. Scores will reset.");
    }
}

const humanSelection = getHumanChoice.toLowerCase();
const computerSelection = getComputerChoice;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanSelection;
    computerChoice = computerSelection;

    let TIE = "It's a TIE!";
    let computerWon = "Computer Won!";
    let humanWon = "YOU WON";

    if (humanChoice == "rock" && computerChoice == "rock"
        || humanChoice == "paper" && computerChoice == "paper"
        || humanChoice == "scissor" && computerChoice == "scissor"
    ) {
        return TIE;
    } else if (humanChoice == "rock" && computerChoice == "paper"
        || humanChoice == "paper" && computerChoice == "scissor"
        || humanChoice == "scissor" && computerChoice == "rock"
    ) {
        return computerWon;
    } else if (humanChoice == "rock" && computerChoice == "scissor"
        || humanChoice == "paper" && computerChoice == "rock"
        || humanChoice == "scissor" && computer == "paper"
    ) {
        return humanWon;
    }
}
