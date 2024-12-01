
//
// Student Name: Chantel Gee
// Assignment Name: Lab 7: Fun with Remote APIs
// Date: 11.30.2024
//

const API_URL = `https://api.thecatapi.com/v1/`;
const API_KEY = "DEMO-API-KEY";

let currentCat;

function getCatPhoto()
{
  
  const url = `${API_URL}images/search`;

  fetch(url,{headers: {
    'x-api-key': API_KEY
  }})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    currentCat = data[0];
    document.getElementById("catLogo").src= currentCat.url;
    document.getElementById("catLogo").style.height = '120px';
    document.getElementById("catLogo").style.width = '120';
  });

}

getCatPhoto()

function getCatFax() {
  
}
