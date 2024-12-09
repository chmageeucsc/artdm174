
//
// Student Name: Chantel Gee
// Assignment Name: Project 4: Web App
// Date: 12.09.2024
//

// temp deckID
let deckID = '';
let drawCardURL1 = 'https://deckofcardsapi.com/api/deck/'
let drawCardURL2 = '/draw/?count=1'


async function getDeck() {
  return (await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")).json();
}

// to use new card
// Object.values(newCard)[2][0].value
async function getCard() {
  return (await fetch(drawCardURL1 + deckID + drawCardURL2)).json();
}

async function shuffleDeck() {
  return (await fetch("https://deckofcardsapi.com/api/deck/" + deckID + "/shuffle/?remaining=true ")).json();
}

const API_URL = `https://api.thecatapi.com/v1/`;
const API_KEY = "DEMO-API-KEY";

let currentCat;

function getCatPhoto()
{
  
  const url = `${API_URL}images/search`;

  fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    currentCat = data[0];
    document.getElementById("catLogo").style.backgroundImage = currentCat.url;
  });

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
      newCard = await getCard();
      await shuffleDeck();
      photo = await getPhoto();

  } catch (e) {
      console.log("Error!");
      console.log(e);
  }

  photoURL = photo[0].url;
  console.log(photoURL);
  document.getElementById("dealerCard").style.backgroundImage = "url('" + photoURL + "')";
  // console.log(deck);
  // console.log(Object.values(deck)[1]);
  deckID = Object.values(deck)[1];
  // console.log(deckID);
  newCard = await getCard();
  playerHand.push(Object.values(newCard)[2][0].value);
  await shuffleDeck();
  newCard = await getCard();
  dealerHand.push(Object.values(newCard)[2][0].value);
  
  // console.log(playerHand);
  // console.log(dealerHand);

  // if (playerHand == "ACE") {
  //   console.log("p1!")
  // } else if (playerHand == "KING") {
  //   console.log("p13!")
  // } else if (playerHand == "QUEEN") {
  //   console.log("p12!")
  // } else if (playerHand == "JACK") {
  //   console.log("p11!")
  // }
  // if (dealerHand == "ACE") {
  //   console.log("d1!")
  // } else if (dealerHand == "KING") {
  //   console.log("d13!")
  // } else if (dealerHand == "QUEEN") {
  //   console.log("d12!")
  // } else if (dealerHand == "JACK") {
  //   console.log("d11!")
  // }
});
