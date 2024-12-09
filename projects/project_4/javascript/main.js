
//
// Student Name: Chantel Gee
// Assignment Name: Project 4: Web App
// Date: 12.09.2024
//

// temp deckID
let deckID = '8cjiymvkscng';
let drawCardURL1 = 'https://deckofcardsapi.com/api/deck/'
let drawCardURL2 = '/draw/?count=1'


// async function getDeck() {
//   return (await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")).json();
// }

async function getCard() {
  return (await fetch(drawCardURL1 + deckID + drawCardURL2)).json();
}

async function shuffleDeck() {
  return (await fetch("https://deckofcardsapi.com/api/deck/" + deckID + "/shuffle/?remaining=true ")).json();
}

document.addEventListener("DOMContentLoaded", async () => {
  let deck = [];

  try {
      // deck = await getDeck();
      newCard = await getCard();
      await shuffleDeck();
  } catch (e) {
      console.log("Error!");
      console.log(e);
  }

  // console.log(Object.values(deck)[1]);
  // deckID = Object.values(deck)[1];
  // console.log(deckID);
  newCard = await getCard();
  console.log(Object.values(newCard)[2][0].value);
  await shuffleDeck();
  newCard = await getCard();
  console.log(Object.values(newCard)[2][0].value);
  await shuffleDeck();
  newCard = await getCard();
  console.log(Object.values(newCard)[2][0].value);
  await shuffleDeck();
  newCard = await getCard();
  console.log(Object.values(newCard)[2][0].value);
  await shuffleDeck();
  newCard = await getCard();
  console.log(Object.values(newCard)[2][0].value);
  await shuffleDeck();
  newCard = await getCard();
  console.log(Object.values(newCard)[2][0].value);


});
