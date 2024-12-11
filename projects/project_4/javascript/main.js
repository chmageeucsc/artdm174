
//
// Student Name: Chantel Gee
// Assignment Name: Project 4: Web App
// Date: 12.09.2024
//

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
  // console.log(photoURL);

  document.getElementById("playerCardBack").style.backgroundImage = "url('" + photoURL + "')";
  document.getElementById("playerCardBack").style.backgroundSize = "20%";

  // console.log(deck);
  // console.log(Object.values(deck)[1]);
  // console.log(deckID);

  newCard = await getCard();
  playerHand.push(Object.values(newCard)[2][0].value);

  let playerCard = Object.values(newCard)[2][0].image;
  console.log("player card value: " + playerCard);

  document.getElementById("playerCardFront").style.backgroundImage = "url('" + playerCard + "')";

  await shuffleDeck();

  newCard = await getCard();
  dealerHand.push(Object.values(newCard)[2][0].value);
  // console.log(Object.values(newCard)[2][0].image)
  let dealerCard = Object.values(newCard)[2][0].image;
  console.log("dealer card value: " + dealerCard);


  document.getElementById("dealerCard").style.backgroundImage = "url('" + dealerCard + "')";
  
  // console.log(playerHand);
  // console.log(dealerHand);

  if (playerHand == "ACE") {
    playerValue = 1;
  } else if (playerHand == "KING") {
    playerValue = 13;
  } else if (playerHand == "QUEEN") {
    playerValue = 12;
  } else if (playerHand == "JACK") {
    playerValue = 11;
  } else {
    playerValue = playerHand;
  }

  // console.log("player value is: " + playerValue);

  if (dealerHand == "ACE") {
    dealerValue = 1;
  } else if (dealerHand == "KING") {
    dealerValue = 13;
  } else if (dealerHand == "QUEEN") {
    dealerValue = 12;
  } else if (dealerHand == "JACK") {
    dealerValue = 11;
  } else {
    dealerValue = dealerHand;
  }

  // console.log("dealer value is: " + dealerValue);

  const higherButton = document.getElementById("higherButton");
  const lowerButton = document.getElementById("lowerButton");

  // Add an event listener for the 'click' event
  higherButton.addEventListener("click", function() {
    // Code to execute when the button is clicked
    playerGuess = "HIGHER";
    console.log("high clicked!");
    higherButton.style.backgroundColor = "lightblue";
    higherButton.disabled = true;
    lowerButton.disabled = true;

    if (playerGuess == "HIGHER") {
      if (playerValue > dealerValue) {
        console.log("YOU WIN! " + playerValue + " is higher than " + dealerValue);
      } else if (playerValue == dealerValue) {
        console.log("No one wins. " + playeplayerValuerHand + " is not higher or lower than " + dealerValue);
      } else {
        console.log("YOU LOSE! " + playerValue + " is lower than " + dealerValue);
      }
    }
  });
  // Add an event listener for the 'click' event
  lowerButton.addEventListener("click", function() {
    // Code to execute when the button is clicked
    playerGuess = "LOWER";
    console.log("low clicked!");
    lowerButton.style.backgroundColor = "lightblue";
    higherButton.disabled = true;
    lowerButton.disabled = true;

    if (playerGuess == "LOWER") {
      if (playerValue > dealerValue) {
        console.log("YOU LOSE! " + playerValue + " is higher than " + dealerValue);
      } else if (playerValue == dealerValue) {
        console.log("No one wins. " + playerValue + " is not higher or lower than " + dealerValue);
      } else {
        console.log("YOU WIN! " + playerValue + " is lower than " + dealerValue);
      }
    }
  });
});
