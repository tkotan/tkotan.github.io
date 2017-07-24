$(() => {
  //game starts with "game board" hidden
  $("#lets-play").hide();
  $("#results-div").hide();
  $("#another-round").hide();
  $("#final-results").hide();
  $("#play-again").hide();

//variables
const rpsls = ["rock","paper","scissors","lizard","spock"]; //game choices
let round = 1; //round number
let computerScore = 0;
let playerScore = 0;
let computerHand;
let playerHand; //the player's choice
let computerWinsRound = false;
let playerWinsRound = false;
let computerWinsGame = false;
let playerWinsGame = false; //no one has won or lost yet
let roundTie = false;
let gameTie = false; //no one has a tie game yet

//reset game requirement met
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
    $("#lets-play").hide();
    $("#results-div").hide();
    $("#another-round").hide();
    $("#final-results").hide();

  }

$("#another-round").on('click', ()=>{
  $("#container").show();
  $("#lets-play").hide();
  $("#another-round").hide();
  $("#play-again").hide();
});

$("#rules").on('click', () => {
  $("#rules").children().toggle();
});

$("#final-results").on('click', () => {
    determineWhoWinsGame();
});
//option to play game again requirement met
$("#play-again").on('click', () => {
  resetGame();
});
//option not to continue requirement met.  Quit any time you want.
$("#quit-button").on('click', () => {
  resetGame();
});

const resetGame = ()=>{
  window.location.reload(true);
  reset();
}

//the game
const playersChoose =
  $(".choice").on('click', (e) => {
    setTimeout(()=>{
    alert("Candie the Computer is still thinking it over...");
  },500);

//Rounds requirement met
  if(round < 4 ){
    let computerHand = rpsls[Math.floor(rpsls.length * Math.random())];
    let playerHand = e.currentTarget.id;
    //https://stackoverflow.com/questions/4944387/go-to-link-on-button-click-jquery
    //setTimeout while computer "thinks" requirement met
    setTimeout(()=>{
      alert("Candie has made her choice. Let's see the results!");
      determineWhoWinsRound(playerHand, computerHand);
      //round increase requirement met
      round++;
      if(round > 3 ){
        $("#final-results").show();
        $("#play-again").show();
        //continue requirement met
        $("#another-round").hide();
      }
    },2000);
   }
});

//stretch goal of adding more logic with more variables met
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

    $("#container").hide();
    $("#how-to-play").hide();
    $("#lets-play").show();
    $("#another-round").show();
//visual representation of players' choices requirement met
    $("#round-header").html("<h1> Round " + round + "</h1>");
    $("#player-hand").html("<img src='images/" + playerHand + ".png'>");
    $("#player-score").html("<h2>" + playerScore + "</h2>");
    $("#computer-hand").html("<img src='images/" + computerHand + ".png'>");
    $("#computer-score").html("<h2>" + computerScore + "</h2>");

    // console.log( "Player Score: " + playerScore + " versus Computer Score: " + computerScore);
  };

//
// //game is done under the following conditions -
//win lose or draw requirement met
const determineWhoWinsGame = () => {
  if (playerScore === computerScore && playerScore !== 0) {
    gameTie = true;
    $("#results-div").html("<h1>Game is tied!</h1>");
  } else if (playerScore > computerScore) {
    playerWinsGame = true;
    $("#results-div").html("<h1>You Win!</h1>");
  } else if (computerScore > playerScore) {
    computerWinsGame = true;
    $("#results-div").html("<h1>Candie Wins!</h1>");
  } else {
    alert("Winner Results!" + computerScore);
  }
  $("#results-div").show();

};


});
