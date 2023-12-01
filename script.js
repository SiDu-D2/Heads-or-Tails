let playerChoice = prompt("Heads or tails?");

let computerOptions = ["heads", "tails"];

let computerChoice = getComputerChoice();

function getComputerChoice() {
   let choiceNumber = Math.floor(Math.random() * 2);
   return computerOptions[choiceNumber];
}       

function game() {
   if (playerChoice === "heads" && computerChoice === "tails") {
      return "Sorry, it was tails";
   } else if (playerChoice === "tails" && computerChoice === "heads") {
      return "Sorry, it was heads";
   } else return "Yes, correct";
}


console.log(game());
