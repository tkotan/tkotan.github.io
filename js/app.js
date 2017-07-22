$(() => {

//variables
const rpsls = ["rock","paper","scissors","lizard","spock"]; //game choices
let round = 1; //round number
let computerScore = 0;
let finalComputerScore = computerScore;
let playerScore = 0;
let finalPlayerScore = playerScore; //the final player score is the sum of the player scores.
let computerHand;
let playerHand; //the player's choice
let computerWinsRound = false;
let playerWinsRound = false;
let computerWinsGame = false;
let playerWinsGame = false; //no one has won or lost yet
let roundTie = false;
let gameTie = false; //no one has a tie game yet
//
// setTimeout (() => {
//    confirm("Candie the Computer has made her choice.  Are you ready for the results?");
// }, 1000);

// setTimeout(() => {
//   ($('#computer-message').dialog());
// }, 3000);

// const computerThinks = $(e.currentTarget).on('click',(e) => {
//         $('computer-message').dialog();
//     });


  const reset = () => {
    round = 1; //round number
    computerScore = 0;
    playerScore = 0;
    computerWinsRound = false;
    playerWinsRound = false;
    computerWinsGame = false;
    playerWinsGame = false; //no one has won or lost yet
    roundTie = false;
    gameTie = false; //no one has a tie game yet
  }


//event listeners
const playersChoose =
$(".choice").on('click', (e) => {
    let playerHand = e.currentTarget.id;
    let computerHand = rpsls[Math.floor(rpsls.length * Math.random())];
    console.log("Round " + round + ":" + playerHand + ":" + computerHand);
    if(round < 4 ){
      determineWhoWinsRound(playerHand, computerHand);
      round++;
    } else {
      determineWhoWinsGame();
    }
});

//https://stackoverflow.com/questions/4944387/go-to-link-on-button-click-jquery

const determineWhoWinsRound = (playerHand,computerHand) => {
  if (playerHand === computerHand) {
    gameTie = true;
  } else if (playerHand === "rock"){
      if (computerHand == "lizard" || computerHand == "scissors"){
        playerWinsRound = true;
        playerScore++;
      } else {
        computerWinsRound = true;
        computerScore++;
      }
  } else if (playerHand === "paper"){
          if (computerHand == "rock" || computerHand == "spock"){
            playerWinsRound = true;
            playerScore++;
          } else {
            computerWinsRound = true;
            computerScore++;
          }
 } else if (playerHand === "scissors"){
              if (computerHand == "paper" || computerHand == "lizard"){
                playerWinsRound = true;
                playerScore++;
              } else {
                computerWinsRound = true;
                computerScore++;
              }
  } else if (playerHand === "lizard"){
                  if (computerHand == "spock" || computerHand == "paper"){
                    playerWinsRound = true;
                    playerScore++;
                  } else {
                    computerWinsRound = true;
                    computerScore++;
                  }
  } else if (playerHand === "spock"){
                      if (computerHand == "scissors" || computerHand == "rock"){
                        playerWinsRound = true;
                        playerScore++;
                      } else {
                        computerWinsRound = true;
                        computerScore++;
                      }
  } else {

  }

  console.log( "Player Score: " + playerScore + " versus Computer Score: " + computerScore);
};


//
// //game is done under the following conditions - keep
const determineWhoWinsGame = () => {
  if (finalPlayerScore === finalComputerScore && finalPlayerScore != 0) {
    gameTie = true;
    console.log("No Winner!  Game is tied.");
  } else if (finalPlayerScore > finalComputerScore) {
    playerWinsGame = true;
    console.log("Player Wins " + playerScore + " to " + computerScore);
  } else if (finalComputerScore > finalPlayerScore) {
    computerWinsGame = true;
    console.log("Computer Wins " + computerScore + " to " + playerScore );
  } else {
    alert("Winner Results!");
  }


};



// //=====================================
// //final destinations - keep
//

// const exitToFinalDestination = () => {
//   if (playerWinsGame = true){
//   $("#final-results").on('click', (e) => {
//     document.location.href = "http://tkotan.github.io/html/final-player-wins.html";
// } else if (computerWinsGame = true){
//   $("#final-results").on('click', (e) => {
//     document.location.href = "http://tkotan.github.io/html/final-computer-wins.html";
// } else if (gameTie = true){
//   $("#final-results").on('click', (e) => {
//     document.location.href = "http://tkotan.github.io/html/final-tie-game.html";
// } else {
//   $("#final-results").on('click', (e) => {
//     document.location.href = "http://tkotan.github.io/index.html";
//   )}
//  )}
//  )}
//  )}
//  }
// }


//grabbing the photo - for visual representation. These images will appear on the left side of the screen for the player, and on the right side for the computer.  That's why I have two different functions.
// const playPlayerHand = () => {
// if (playerHand === "rock"){
//   $('#rock-img').show();
//
// } else if (playerHand === "paper"){
//   $('#paper-img').show();
//
// } else if (playerHand === "scissors") {
//   $('#scissors-img').show();
//
// } else if (playerHand === "lizard") {
//   $('#lizard-img').show();
//
// } else if (playerHand === "spock") {
//   $('#spock-img').show();
// }
// }
//
//
// const playComputerHand = () => {
// if (computerHand === "rock"){
//   $('#rock-img').show();
//
// } else if (computerHand === "paper"){
//   $('#paper-img').show();
//
// } else if (computerHand === "scissors") {
//   $('#scissors-img').show();
//
// } else if (computerHand === "lizard") {
//   $('#lizards-img').show();
//
// } else if (computerHand === "spock") {
//   $('#spock-img').show();
// }
// }

//logic for rounds

});
