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

let getHumanChoice;

let userInputRock = /rock/i;
let userInputPaper = /paper/i;
let userInputScissor = /scissor/i;

let humanSelection;
let computerSelection;

let TIE = "It's a TIE!";
let computerWon = "COMPUTER won!";
let humanWon = "YOU won!";
let matches = 1;

let playerIsWinner = "You BEAT Computer!";
let computerIsWinner = "You LOST to computer!";

let playGame = () => {
    let getHumanChoice = prompt('Enter rock, paper, or scissor');

    if (userInputRock.test(getHumanChoice)
        || userInputPaper.test(getHumanChoice)
        || userInputScissor.test(getHumanChoice)) {
        alert("You entered" + " " + getHumanChoice.toUpperCase());
        alert("Computer chose" + " " + getComputerChoice.toUpperCase());

    } else if (!userInputRock.test(getHumanChoice)
        || !userInputPaper.test(getHumanChoice)
        || !userInputScissor.test(getHumanChoice)) {
        alert("Please try again.");
        return playGame();
    }

    while (!getHumanChoice) {
        getHumanChoice = prompt('Enter rock, paper, or scissor');
        if (userInputRock.test(getHumanChoice)
            || userInputPaper.test(getHumanChoice)
            || userInputScissor.test(getHumanChoice)) {
            alert("You entered" + " " + getHumanChoice.toUpperCase());
            alert("Computer chose" + " " + getComputerChoice.toUpperCase());

        } else if (!userInputRock.test(getHumanChoice)
            || !userInputPaper.test(getHumanChoice)
            || !userInputScissor.test(getHumanChoice)) {
            alert("Please try again.");
            return playGame();
        }
    }

    humanSelection = getHumanChoice.toLowerCase();
    computerSelection = getComputerChoice;

    if (humanSelection == "rock" && computerSelection == "rock"
        || humanSelection == "paper" && computerSelection == "paper"
        || humanSelection == "scissor" && computerSelection == "scissor"
    ) {
        alert(TIE);
        matches++;

    } else if (humanSelection == "rock" && computerSelection == "paper"
        || humanSelection == "paper" && computerSelection == "scissor"
        || humanSelection == "scissor" && computerSelection == "rock"
    ) {
        computerScore++;
        alert(computerWon + " " + "COMPUTER Score: " + computerScore);
        matches++;

    } else if (humanSelection == "rock" && computerSelection == "scissor"
        || humanSelection == "paper" && computerSelection == "rock"
        || humanSelection == "scissor" && computerSelection == "paper"
    ) {
        humanScore++;
        alert(humanWon + " " + "YOUR Score: " + humanScore);
        matches++;
    }

    if (matches < 6) {
        alert("HUMAN: " + humanScore + " " + "COMPUTER: " + computerScore);
        alert("Round " + matches + " begins");
        if (matches == 5) {
        alert("FINAL ROUND");}
        return playGame();
    } else if (matches == 6) {
            if (humanScore > computerScore) {
                alert(playerIsWinner + " " + "HUMAN: " + humanScore + " " + "COMPUTER:" + " " + computerScore);
            } else if (humanScore == computerScore) {
                alert (TIE + " " + "HUMAN: " + humanScore + " " + "COMPUTER:" + " " + computerScore);
            } else {
                alert(computerIsWinner + " " + "HUMAN: " + humanScore + " " + "COMPUTER:" + " " + computerScore);
            }
        }
}

playGame();



