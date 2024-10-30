//
// Student Name: Chantel Gee
// Assignment Name: Project 3: Dynamic Media Player
// Date: 10.25.2024
//

import { cueTimer } from "./cuepoints.js";

document.addEventListener("DOMContentLoaded", init)
var myCues;

function init() {

  // create a playlist of functions to call at certain moments in the video.
  myCues = [
    { seconds: 2, callback: func1 },
    { seconds: 14, callback: func2 },
    { seconds: 30, callback: func3 },
    { seconds: 67, callback: func4 },
    { seconds: 89, callback: func5 },
    { seconds: 97, callback: func6 },
    { seconds: 111, callback: func7 },
    { seconds: 118, callback: func8 },
    { seconds: 149, callback: func9 }
  ];

  // setup the cuepoint timer
  cueTimer.setup("vid", myCues);

  /**
   * Video shortcut variables
   */

  const teddy = document.querySelector(".teddy");
  const begin = document.getElementById("begin");
  const sweet = document.getElementById("sweetness");
  const playful = document.getElementById("playfulness");
  const patience = document.getElementById("patience");
  const courage = document.getElementById("courage");
  const love = document.getElementById("love");
  const end = document.getElementById("end");

  //set video's initial volume
  teddy.volume = 0.5;

  /**
   * create the button event listeners to control the video IN SECONDS
   * */

   begin.addEventListener("click", (e) => {
    teddy.currentTime = 0;
    activeVideoButton(begin);
    inactiveVideoButton(sweet);
    inactiveVideoButton(playful);
    inactiveVideoButton(patience);
    inactiveVideoButton(courage);
    inactiveVideoButton(love);
    inactiveVideoButton(end);
  });

  sweet.addEventListener("click", (e) => {
    teddy.currentTime = 26;
    inactiveVideoButton(begin);
    activeVideoButton(sweet);
    inactiveVideoButton(playful);
    inactiveVideoButton(patience);
    inactiveVideoButton(courage);
    inactiveVideoButton(love);
    inactiveVideoButton(end);
  });

  playful.addEventListener("click", (e) => {
    teddy.currentTime = 41.75;
    inactiveVideoButton(begin);
    inactiveVideoButton(sweet);
    activeVideoButton(playful);
    inactiveVideoButton(patience);
    inactiveVideoButton(courage);
    inactiveVideoButton(love);
    inactiveVideoButton(end);
  });

  patience.addEventListener("click", (e) => {
    teddy.currentTime = 64.9;
    inactiveVideoButton(begin);
    inactiveVideoButton(sweet);
    inactiveVideoButton(playful);
    activeVideoButton(patience);
    inactiveVideoButton(courage);
    inactiveVideoButton(love);
    inactiveVideoButton(end);
  });

  courage.addEventListener("click", (e) => {
    teddy.currentTime = 80.5;
    inactiveVideoButton(begin);
    inactiveVideoButton(sweet);
    inactiveVideoButton(playful);
    inactiveVideoButton(patience);
    activeVideoButton(courage);
    inactiveVideoButton(love);
    inactiveVideoButton(end);
  });

  love.addEventListener("click", (e) => {
    teddy.currentTime = 103.7;
    inactiveVideoButton(begin);
    inactiveVideoButton(sweet);
    inactiveVideoButton(playful);
    inactiveVideoButton(patience);
    inactiveVideoButton(courage);
    activeVideoButton(love);
    inactiveVideoButton(end);
  });

  end.addEventListener("click", (e) => {
    teddy.currentTime = 168;
    inactiveVideoButton(begin);
    inactiveVideoButton(sweet);
    inactiveVideoButton(playful);
    inactiveVideoButton(patience);
    inactiveVideoButton(courage);
    inactiveVideoButton(love);
    activeVideoButton(end);
  });

} // end init function

function activeVideoButton(button){
  button.style.backgroundColor = "rgb(145, 68, 68)";
  button.style.color = "white";
}

function inactiveVideoButton(button) {
  button.style.backgroundColor = "rgb(59, 59, 59)";
  button.style.color = "pink";
}

//the custom callback functions to trigger when a cuepoint is hit.
//You can code up whatever behavior you need in your own callbacks

function func1() {
  document.querySelector("#web1").style.display = "block";
  document.querySelector("#web1").src =
    "https://en.wikipedia.org/wiki/Teddy_bear";
}

function func2() {
  document.querySelector("#web2").style.display = "block";
  document.querySelector("#web2").src =
    "https://blog.blueprintprep.com/medical/how-long-does-it-take-to-become-a-surgeon/";
}

function func3() {
  document.querySelector("#web3").style.display = "block";
  document.querySelector("#web3").src =
    "https://www.thekitchn.com/old-school-strawberry-bon-bons-history-23307357";
}

function func4() {
  document.querySelector("#web4").style.display = "block";
  document.querySelector("#web4").src =
    "https://www.calm.com/blog/how-to-cultivate-patience-in-your-daily-life";
}

function func5() {
  document.querySelector("#web5").style.display = "block";
  document.querySelector("#web5").src =
    "https://medium.com/@timcastle_/the-mindset-shift-transforming-fear-into-courage-978a4998e795#:~:text=The%20first%20step%20in%20transforming,yourself%20to%20reach%20new%20heights.";
}

function func6() {
  document.querySelector("#web6").style.display = "block";
  document.querySelector("#web6").src = "https://posproject.org/blog-curious-about-curiosity/";
}

function func7() {
  document.querySelector("#web7").style.display = "block";
  document.querySelector("#web7").src =
    "https://ideas.ted.com/how-did-the-human-heart-become-associated-with-love-and-how-did-it-turn-into-the-shape-we-know-today/";
}

function func8() {
  document.querySelector("#web8").style.display = "block";
  document.querySelector("#web8").src = "https://youtu.be/J_CFBjAyPWE?si=B32DIbFHztTRENBl";
}

function func9() {
  document.querySelector("#web9").style.display = "block";
  document.querySelector("#web9").style.height = "85%";
  document.querySelector("#web9").src =
    "https://img.freepik.com/free-vector/get-well-soon-with-cute-bear_23-2148500957.jpg";
}