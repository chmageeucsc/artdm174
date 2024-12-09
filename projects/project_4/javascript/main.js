
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
  .then(data => 
    // deckID = Object.values(data)[1]
    console.log(Object.values(data)[1])
    //document.getElementById("catFax").innerHTML = Object.values(data)[0]
  )
  .catch(error => console.log("ERROR"))
}

getDeck();