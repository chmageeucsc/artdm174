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

  const vid = document.querySelector("#vid");
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
  document.querySelector("#vid").style = "outline : 10px solid red";
}

function func2() {
  let pop = document.querySelector(".pop");
  pop.innerHTML = "<p>Ohh Snap!</p>";
  document.querySelector(".pop").classList.toggle("hide");
  setTimeout(() => {
      document.querySelector(".pop").classList.toggle("hide");
  }, 2000);
}

function func3() {
  const pop = document.querySelector(".pop");
  pop.innerHTML = "<p>E=MC<sup>2</sup> is NOT Statistical Data!!</p>";
  pop.classList.toggle("hide");
  setTimeout(() => {
      document.querySelector(".pop").classList.toggle("hide");
  }, 2000);
  document.querySelector("#vid").style = "outline: 0px solid red";
  document.querySelector("#web").src =
      "https://en.wikipedia.org/wiki/Albert_Einstein";
}

function func4() {
  document.querySelector("#web").src =
      "https://en.wikipedia.org/wiki/Paradigm_shift";
}

function func5() {
  document.querySelector("#web").src =
      "https://en.wikipedia.org/wiki/Domestic_violence";
}

function func6() {
  document.querySelector("#web").src = "images/koljr-banana-splits-400.jpg";
}

function func7() {
  document.querySelector("#web").src = "images/koljr-banana-splits-400.jpg";
}

function func8() {
  document.querySelector("#web").src = "images/koljr-banana-splits-400.jpg";
}

function func9() {
  document.querySelector("#web").src = "images/koljr-banana-splits-400.jpg";
}