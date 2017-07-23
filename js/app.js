$(() => {

  $('#lets-play').hide();
  $('#results-div').hide();
  $('#another-round').hide();
  $('#final-results').hide();
  $('#play-again').hide();

//variables
const rpsls = ["rock","paper","scissors","lizard","spock"]; //game choices
let round = 1; //round number
let computerScore = 0;
// let finalComputerScore = computerScore;
let playerScore = 0;
// let finalPlayerScore = playerScore; //the final player score is the sum of the player scores.
let computerHand;
let playerHand; //the player's choice
let computerWinsRound = false;
let playerWinsRound = false;
let computerWinsGame = false;
let playerWinsGame = false; //no one has won or lost yet
let roundTie = false;
let gameTie = false; //no one has a tie game yet


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
    $('#lets-play').hide();
    $('#results-div').hide();
    $('#another-round').hide();
    $('#final-results').hide();

  }


  $('#another-round').on('click', ()=>{
  $('#container').show();
  $('#lets-play').hide();
  $('#another-round').hide();
  $('#play-again').hide();

});

$('#final-results').on('click', () =>{
    determineWhoWinsGame();
});

$('#play-again').on('click', ()=>{
  $('#lets-play').hide();
  $('#results-div').hide();
  $('#another-round').hide();
  $('#final-results').hide();
  $('#play-again').hide();

  reset();
});

//event listeners
const playersChoose =
$('.choice').on('click', (e) => {
  if(round < 4 ){
    let playerHand = e.currentTarget.id;
    let computerHand = rpsls[Math.floor(rpsls.length * Math.random())];
    console.log("Round " + round + ":" + playerHand + ":" + computerHand);
      determineWhoWinsRound(playerHand, computerHand);
      round++;

      if(round > 3 ){
        $('#final-results').show();
        $('#play-again').show();
        $('#another-round').hide();
      }
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
    $('#container').hide();
    $('#play-the-game').hide();
    $('#lets-play').show();
    $('#another-round').show();

    $('#round').html("<h1> Round " + round + "</h1>");
    $('#player-hand').html("<img src='images/" + playerHand + ".png'>");
    $("#player-score").html("<h2>" + playerScore + "</h2>");
    $("#computer-hand").html("<img src='images/" + computerHand + ".png'>");
    $("#computer-score").html("<h2>" + computerScore + "</h2>");

    console.log( "Player Score: " + playerScore + " vs Computer Score: " + computerScore);
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

  $('#results-div').show();

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
