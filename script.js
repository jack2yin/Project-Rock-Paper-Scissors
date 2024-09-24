let rock = 0;
let paper = 1;
let scissor = 2;

function getComputerChoice() {  
    logic = Math.floor(Math.random() * 3); 
    if (logic == rock) {
        console.log("rock")
    } else if (logic == paper) {
        console.log("paper")
    } else if (logic == scissor) {
        console.log("scissor")
    }
 }

let getHumanChoice = prompt("Rock, Paper or Scissor", " ");
console.log(getHumanChoice);




 