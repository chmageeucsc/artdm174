
//
// Student Name: Chantel Gee
// Assignment Name: Lab 7: Fun with Remote APIs
// Date: 12.02.2024
//

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
    console.log(data)
    currentCat = data[0];
    document.getElementById("catLogo").src= currentCat.url;
  });

}

function getCatFax() {
  fetch(`https://meowfacts.herokuapp.com/`)
  .then(response => {
    return response.json();
  })
  .then(data => 
    // console.log(Object.values(data)[0])
    document.getElementById("catFax").innerHTML = Object.values(data)[0]
  )
  .catch(error => console.log("ERROR"))
}

document.getElementById("button").onclick = function() {
  window.location.reload();
};

getCatPhoto();
getCatFax();
