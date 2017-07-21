$(() => {
	$
  console.log("What's up?");
});
// Main game
// 1. The player accesses the home page.
      // - all scores must be set to zero as soon as a player lands on this page. const score = 0;
// 2. He makes a selection based on the picture. event handler
// 3. It takes him to another page.
// 4. The page says computer is thinking.
// 5. Computer's thinking is represented by a question mark
// 6. that rocks back and forth for 3-4 cycles -
// 7. then she has an idea (lightbulb comes up).
// 8. The button to continue pops up.
// 9. The player selects continue.
// 10. The player is taken to the game page.
// 11. The player and computer choices slide into the screen.
        // Rules of the game
        //   Scissors cuts Paper
        //   Paper covers Rock
        //   Rock crushes Lizard
        //   Lizard poisons Spock
        //   Spock smashes Scissors
        //   Scissors decapitates Lizard
        //   Lizard eats Paper
        //   Paper disproves Spock
        //   Spock vaporizes Rock
        //   Rock crushes Scissors

// 12. The winner's object remains visible
// 13. while the loser's object disappears.
// 14. The scores slide up on each side of the screen. Round winner is announced.
// 15. Buttons pop up for player to play another round or quit.

//         Path 1
//         1. If player plays another round, go to round-intro page.
//         2. Player makes a selection based on the picture.
//         3. Repeat steps 3-15 in main game.
//
//         Path 2
//         1. If player quits, go back to home page.
//
// 16. There are three rounds in the game.
// 17. After the third round, a final results button appears.
// 18. Player goes to another page.
//
//         Player wins
//         1. Player wins screen pops up.
//         2. If player chooses to play again, he is sent to the home page.
//
//         Computer wins
//         1. Computer wins screen pops up.
//         2. If player chooses to play again, he is sent to the home page.
//
//         Tie game
//         1. Tie game screen pops up.
//         2. If player chooses to play again, he is sent to the home page.

//variables
const rpsls = [rock,paper,scissor,lizard,spock]; //game choices
let round = 1; //round number
let computerScore = 0;
let finalComputerScore = 0;
let playerScore = 0;
let finalPlayerScore = 0;
let playerHand; //the player's choice
let computerWinsRound = false;
let playerWinsRound = false;
let computerWinsGame = false;
let playerWinsGame = false; //no one has won or lost yet
let roundTie = false;
let gameTie = false; //no one has a tie game yet


//objects
computer = {
  let computerHand = rpsls[Math.floor(rspls.length * Math.random())];
}
const eventHandlers = {
//player clicks to choose position

//on click
}

const UI = {

}

const app = {


}

//game

//player wins round
if (playerHand === scissors && computerHand === paper){
  playerWinsRound = true;
  playerScore++;
} else if (playerHand === paper && computerHand === rock) {
  playerWinsRound = true;
  playerScore++;
} else if (playerHand === rock && computerHand === lizard){
  playerWinsRound = true;
  playerScore++;
} else if (playerHand === lizard && computerHand === spock){
  playerWinsRound = true;
  playerScore++;
} else if (playerHand === spock && computerHand === scissors){
  playerWinsRound = true;
  playerScore++;
} else if (playerHand === scissors && computerHand === lizard){
  playerWinsRound = true;
  playerScore++;
} else if (playerHand === lizard && computerHand === paper){
  playerWinsRound = true;
  playerScore++;
} else if (playerHand === paper && computerHand === spock){
  playerWinsRound = true;
  playerScore++;
} else if (playerHand === spock && computerHand === rock){
  playerWinsRound = true;
  playerScore++;
} else if (playerHand === rock && computerHand === scissors){
  playerWinsRound = true;
  playerScore++;
}

//================================

//computer wins round
if (computerHand === scissors && playerHand === paper){
  computerWinsRound = true;
  computerScore++;
} else if (computerHand === paper && playerHand === rock) {
  computerWinsRound = true;
  computerScore++;
} else if (computerHand === rock && playerHand === lizard){
  computerWinsRound = true;
  computerScore++;
} else if (computerHand === lizard && playerHand === spock){
  computerWinsRound = true;
  computerScore++;
} else if (computerHand === spock && playerHand === scissors){
  computerWinsRound = true;
  computerScore++;
} else if (computerHand === scissors && playerHand === lizard){
  computerWinsRound = true;
  computerScore++;
} else if (computerHand === lizard && playerHand === paper){
  computerWinsRound = true;
  computerScore++;
} else if (computerHand === paper && playerHand === spock){
  computerWinsRound = true;
  computerScore++;
} else if (computerHand === spock && playerHand === rock){
  computerWinsRound = true;
  computerScore++;
} else if (computerHand === rock && playerHand === scissors){
  computerWinsRound = true;
  computerScore++;
}

//=============================
//round tie
if (playerScore === rock && computerScore === rock){
  roundTie = true;
} else if (playerScore === paper && computerScore === paper){
  roundTie = true;
} else if (playerScore === scissors && computerScore === scissors){
  roundTie = true;
} else if (playerScore === lizard && computerScore === lizard){
  gameTie = true;
} else if (playerScore === spock && computerScore === spock){
  gameTie = true;
}

//==============================
// At round 3, finalcomputerscore = sum of computerScore
