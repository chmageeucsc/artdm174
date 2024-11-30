
//
// Student Name: Chantel Gee
// Assignment Name: Lab 7: Fun with Remote APIs
// Date: 11.29.2024
//

// random color for background
function randomHex() {
  // Storing all letter and digit combinations 
  // for html color code 
  let letters = "0123456789ABCDEF"; 
  
  // color will hold the generated combination
  let color = ''; 
  
  // Generating 6 times as HTML color code  
  // consist of 6 letter or digits 
  for (let i = 0; i < 6; i++) 
      color += letters[(Math.floor(Math.random() * 16))]; 
  
  return(color);
}

async function loadColor() {
  return (await fetch("https://www.thecolorapi.com/id?hex=" + randomHex() + "&format=json")).json();
}

document.addEventListener("DOMContentLoaded", async () => {
  let houses = [];

  try {
      color = await loadColor();
  } catch (e) {
      console.log("Error!");
      console.log(e);
  }

  let html = "";

  //make a reference to the html container where
  //the info will be displayed.
  const container = document.querySelector("#container");
  container.innerHTML = html;
  
  // console.log(houses);

  document.body.style.background = color.hex.value;
});
  