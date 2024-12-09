
//
// Student Name: Chantel Gee
// Assignment Name: Project 4: Web App
// Date: 12.09.2024
//

let deckID = '';
let drawCardURL1 = 'https://deckofcardsapi.com/api/deck/'
let drawCardURL2 = '/draw/?count=1'

function getDeck() {
  fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
  .then(response => {
    return response.json();
  })
  .then(data => {
      deckID = Object.values(data)[1];
      console.log("first: " + deckID);

      getCard(deckID)
      // console.log(Object.values(data)[1])
    }
  )
  .catch(error => console.log("ERROR"))
}

getDeck();

function getCard(ID) {
  fetch(drawCardURL1 + ID + drawCardURL2)
  .then(response => {
    return response.json();
  })
  .then(data => {
      console.log(data)
    }
  )
  .catch(error => console.log("ERROR"))
}
