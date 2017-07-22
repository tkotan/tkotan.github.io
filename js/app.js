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
// }, 3000);

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
  console.log(playerHand + ":" + computerHand);
  // determineWhoWinsRound(playerHand,computerHand);
  // playPlayerHand();
  // playComputerHand();

});

//https://stackoverflow.com/questions/4944387/go-to-link-on-button-click-jquery
// playerWinsRound
const proclaimPlayerSuccess = () => {
    if (playerHand === "scissors" && computerHand === "paper"){
      playerWinsRound = true;
      playerScore++;
    } else if (playerHand === "paper" && computerHand === "rock") {
      playerWinsRound = true;
      playerScore++;
    } else if (playerHand === "rock" && computerHand === "lizard"){
      playerWinsRound = true;
      playerScore++;
    } else if (playerHand === "lizard" && computerHand === "spock"){
      playerWinsRound = true;
      playerScore++;
    } else if (playerHand === "spock" && computerHand === "scissors"){
      playerWinsRound = true;
      playerScore++;
    } else if (playerHand === "scissors" && computerHand === "lizard"){
      playerWinsRound = true;
      playerScore++;
    } else if (playerHand === "lizard" && computerHand === "paper"){
      playerWinsRound = true;
      playerScore++;
    } else if (playerHand === "paper" && computerHand === "spock"){
      playerWinsRound = true;
      playerScore++;
    } else if (playerHand === "spock" && computerHand === "rock"){
      playerWinsRound = true;
      playerScore++;
    } else if (playerHand === "rock" && computerHand === "scissors"){
      playerWinsRound = true;
      playerScore++;
    }
  }

  //computer wins round
const proclaimComputerSuccess = () => {
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
}

  //round tie
const declareTieRound = () => {
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
}
//
// //==============================
//
// //player wins game under the following conditions
// if (finalPlayerScore === 1 && finalComputerScore === 0){
//   playerWinsGame = true;
// } else if (finalPlayerScore === 2 && (finalComputerScore === 0 || finalComputerScore === 1)){
//   playerWinsGame = true;
// } else if (finalPlayerScore === 3 && (finalComputerScore === 0 || finalComputerScore === 1 || finalComputerScore === 2)){
//   playerWinsGame = true;
// }
//
// //==================================
//
// //computer wins game under the following conditions
// if (finalComputerScore === 1 && finalPlayerScore === 0){
//   computerWinsGame = true;
// } else if (finalComputerScore === 2 && (finalPlayerScore === 0 || finalPlayerScore === 1)){
//   computerWinsGame = true;
// } else if (finalComputerScore === 3 && (finalPlayerScore === 0 || finalPlayerScore === 1 || finalPlayerScore === 2)){
//   computerWinsGame = true;
// }
//
// //====================================
//
// //game is done under the following conditions - keep
const determineWhoWinsGame = () => {
  if (finalPlayerScore === finalComputerScore) {
  gameTie = true;
} else if (finalPlayerScore > finalComputerScore) {
  playerWinsGame = true;
} else if (finalComputerScore > finalPlayerScore) {
  computerWinsGame = true;
}
}



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


//grabbing the photo
// const playPlayerHand = () => {
// if (playerHand === "rock"){
//   $('#rock-img');
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



reset();

});
