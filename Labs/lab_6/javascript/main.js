
//This code does NOT create any global variables.
//Promises can be chained together, with the previous promise
// passing its results to the next one in the chain.
// the format is: fetch().then().then().catch()
//it's easier to read if we put each step in its own line,
//that's why the periods start the then lines.

fetch("houses.json")
    .then((response) => response.json())
    .then((data) => {
        //create a temp holder to append all the html generated inside the forEach iterator
        let html = "";

        //the argument "house" passed to the arrow function
        //holds each item in the array in turn.
        data.forEach((house) => {
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
    })
    .catch((err) => console.log("Oops!", err));
    //this only runs if there is an error during the above process

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

fetch("https://www.thecolorapi.com/id?hex=" + randomHex() + "&format=json")
    .then((response) => response.json())
    .then((data) => {
        document.body.style.background = data.hex.value;
        console.log(data.hex.value);
    })
    .catch((err) => console.log("Colr error!", err));

    