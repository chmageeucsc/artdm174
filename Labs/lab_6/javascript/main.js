
//
// Student Name: Chantel Gee
// Assignment Name: Lab 6: Fetch
// Date: 11.10.2024
//

//This code does NOT create any global variables.
//Promises can be chained together, with the previous promise
// passing its results to the next one in the chain.
// the format is: fetch().then().then().catch()
//it's easier to read if we put each step in its own line,
//that's why the periods start the then lines.

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

async function loadHouses() {
    return (await fetch("houses.json")).json();
}

async function loadColor() {
    return (await fetch("https://www.thecolorapi.com/id?hex=" + randomHex() + "&format=json")).json();
}

document.addEventListener("DOMContentLoaded", async () => {
    let houses = [];

    try {
        houses = await loadHouses();
        color = await loadColor();
    } catch (e) {
        console.log("Error!");
        console.log(e);
    }

    let html = "";

    houses.forEach((house) => {
        let family = house.members.join(" | ");

        // generate the html snippet for one array item
        //to be added to the "html" temp holder.
        let objInfo = `<dt class="house">${house.name}</dt>
        <dd class="folks">${family}</dd>`;
        html += objInfo;
    });

    //make a reference to the html container where
    //the info will be displayed.
    const container = document.querySelector("#container");
    container.innerHTML = html;
    
    // console.log(houses);

    document.body.style.background = color.hex.value;
});
    