
//
// Student Name: Chantel Gee
// Assignment Name: Project 4: Web App
// Date: 12.10.2024
//

var wins = 0;
var ties = 0;
var losses = 0;

if (localStorage.getItem('wins') != null) {
  wins = +localStorage.getItem('wins');
  winsText.textContent = "WINS: " + wins;
}
if (localStorage.getItem('ties') != null) {
  ties = +localStorage.getItem('ties');  tiesText.textContent = "TIES: " + ties;

}
if (localStorage.getItem('losses') != null) {
  losses = +localStorage.getItem('losses');  lossesText.textContent = "LOSSES: " + losses;

}

console.log("number of wins is: " + wins);
console.log("number of ties is: " + ties);
console.log("number of losses is: " + losses);

// temp deckID
var deckID = '';
let drawCardURL1 = 'https://deckofcardsapi.com/api/deck/'
let drawCardURL2 = '/draw/?count=1'

var playerGuess = "NONE";

async function getDeck() {
  return (await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")).json();
}

// to use new card
// Object.values(newCard)[2][0].value
async function getCard() {
  return (await fetch("https://deckofcardsapi.com/api/deck/" + deckID + "/draw/?count=1")).json();
}

async function shuffleDeck() {
  return (await fetch("https://deckofcardsapi.com/api/deck/" + deckID + "/shuffle/?remaining=true ")).json();
}

async function getPhoto() {
  return (await fetch("https://api.thecatapi.com/v1/images/search")).json();
}

document.addEventListener("DOMContentLoaded", async () => {
  let deck = [];
  let playerHand = [];
  let dealerHand = [];

  try {
      deck = await getDeck();
      deckID = Object.values(deck)[1];

      newCard = await getCard();
      await shuffleDeck();
      photo = await getPhoto();

  } catch (e) {
      console.log("Error!");
      console.log(e);
  }

  photoURL = photo[0].url;

  document.getElementById("playerCardBack").style.backgroundImage = "url('" + photoURL + "')";
  document.getElementById("playerCardBack").style.backgroundSize = "20%";

  newCard = await getCard();
  playerHand.push(Object.values(newCard)[2][0].value);

  let playerCard = Object.values(newCard)[2][0].image;

  document.getElementById("playerCardFront").style.backgroundImage = "url('" + playerCard + "')";

  await shuffleDeck();

  newCard = await getCard();
  dealerHand.push(Object.values(newCard)[2][0].value);
  let dealerCard = Object.values(newCard)[2][0].image;

  document.getElementById("dealerCard").style.backgroundImage = "url('" + dealerCard + "')";

  if (playerHand == "ACE") {
    playerValue = 1;
  } else if (playerHand == "KING") {
    playerValue = 13;
  } else if (playerHand == "QUEEN") {
    playerValue = 12;
  } else if (playerHand == "JACK") {
    playerValue = 11;
  } else {
    playerValue = +playerHand;
  }

  if (dealerHand == "ACE") {
    dealerValue = 1;
  } else if (dealerHand == "KING") {
    dealerValue = 13;
  } else if (dealerHand == "QUEEN") {
    dealerValue = 12;
  } else if (dealerHand == "JACK") {
    dealerValue = 11;
  } else {
    dealerValue = +dealerHand;
  }

  // console.log("dealer value is: " + dealerValue);

  const higherButton = document.getElementById("higherButton");
  const lowerButton = document.getElementById("lowerButton");
  const gameText = document.getElementById("gameText");
  const winsText = document.getElementById("winsText");
  const tiesText = document.getElementById("tiesText");
  const lossesText = document.getElementById("lossesText");

  // Add an event listener for the 'click' event
  higherButton.addEventListener("click", function() {
    // Code to execute when the button is clicked
    playerGuess = "HIGHER";
    document.getElementById("playerCardInner").classList.toggle("flipped")
    higherButton.style.backgroundColor = "lightblue";
    higherButton.disabled = true;
    lowerButton.disabled = true;

    if (playerGuess == "HIGHER") {
      
      if (playerValue > dealerValue) {
        wins += 1;
        localStorage.setItem('wins', wins);
        winsText.textContent = "WINS: " + localStorage.getItem('wins');
        gameText.textContent = "YOU WIN! " + playerValue + " is HIGHER than " + dealerValue + ".";
      } else if (playerValue == dealerValue) {
        ties += 1;
        localStorage.setItem('ties', ties);
        tiesText.textContent = "TIES: " + localStorage.getItem('ties');
        gameText.textContent = "IT'S A TIE! " + playerValue + " is not HIGHER or LOWER than " + dealerValue + ".";
      } else {
        losses += 1;
        localStorage.setItem('losses', losses);
        lossesText.textContent = "LOSSES: " + localStorage.getItem('losses');
        gameText.textContent = "YOU LOSE! " + playerValue + " is LOWER than " + dealerValue + ".";
      }
    }
  });
  // Add an event listener for the 'click' event
  lowerButton.addEventListener("click", function() {
    // Code to execute when the button is clicked
    playerGuess = "LOWER";
    document.getElementById("playerCardInner").classList.toggle("flipped")
    lowerButton.style.backgroundColor = "lightblue";
    higherButton.disabled = true;
    lowerButton.disabled = true;

    if (playerGuess == "LOWER") {
      if (playerValue > dealerValue) {
        losses += 1;
        localStorage.setItem('losses', losses);
        lossesText.textContent = "LOSSES: " + localStorage.getItem('losses');
        gameText.textContent = "YOU LOSE! " + playerValue + " is HIGHER than " + dealerValue + ".";
      } else if (playerValue == dealerValue) {
        ties += 1;
        localStorage.setItem('ties', ties);
        tiesText.textContent = "TIES: " + localStorage.getItem('ties');
        gameText.textContent = "IT'S A TIE! " + playerValue + " is not HIGHER or LOWER than " + dealerValue + ".";
      } else {
        wins += 1;
        localStorage.setItem('wins', wins);
        winsText.textContent = "WINS: " + localStorage.getItem('wins');
        gameText.textContent = "YOU WIN! " + playerValue + " is LOWER than " + dealerValue + ".";
      }
    }
  });
  gameText.style.fontSize = "x-large";

});
