//
// Student Name: Chantel Gee
// Assignment Name: Project 3: Dynamic Media Player
// Date: 11.02.2024
//

import { cueTimer } from "./cuepoints.js";

document.addEventListener("DOMContentLoaded", init)
var myCues;

function init() {

  alert("For the best experience, watch fully from beginning to end :)");

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
  const vcTitle = document.getElementById("vc-title");
  const chDiv = document.getElementById("chapterDiv");

  //set video's initial volume
  teddy.volume = 0.5;

  /**
   * create the button event listeners to control the video IN SECONDS
   * */

   begin.addEventListener("click", (e) => {
    teddy.currentTime = 0;
    inactiveVideoButton(begin);
  });

  sweet.addEventListener("click", (e) => {
    teddy.currentTime = 26;
    inactiveVideoButton(sweet);
  });

  playful.addEventListener("click", (e) => {
    teddy.currentTime = 41.75;
    inactiveVideoButton(playful);
  });

  patience.addEventListener("click", (e) => {
    teddy.currentTime = 64.9;
    inactiveVideoButton(patience);
  });

  courage.addEventListener("click", (e) => {
    teddy.currentTime = 80.5;
    inactiveVideoButton(courage);
  });

  love.addEventListener("click", (e) => {
    teddy.currentTime = 103.7;
    inactiveVideoButton(love);
  });

  end.addEventListener("click", (e) => {
    teddy.currentTime = 168;
    inactiveVideoButton(end);
  });
  
  function inactiveVideoButton(button) {
    let chapters = [begin, sweet, playful, patience, courage, love, end];
    chapters.forEach((item) => {
      if (item != button) {
        item.style.backgroundColor = "rgb(59, 59, 59)";
        item.style.color = "pink";
      }
    });
    button.style.backgroundColor = "rgb(96, 58, 58)";
    button.style.color = "white";
  }

  // show and hide video chapters
  vcTitle.addEventListener("click", (e) => {
    chDiv.classList.toggle("hide");
  });

} // end init function

//the custom callback functions to trigger when a cuepoint is hit.
//You can code up whatever behavior you need in your own callbacks

function func1() {
  document.querySelector("#web1").style.display = "block";
  document.querySelector("#web1").src = "https://en.wikipedia.org/wiki/Teddy_bear";
}

function func2() {
  document.querySelector("#web2").style.display = "block";
  document.querySelector("#web2").src = 
    "https://images.stockcake.com/public/f/4/1/f41a0e2b-37df-4031-b25e-a747f25ee6a6_large/doctor-teddy-bear-stockcake.jpg";
  document.querySelector("#inserts").style.backgroundColor = "rgb(87, 83, 109)";
  document.querySelector("#web2a").style.display = "block";
}

function func3() {
  document.querySelector("#web3").style.display = "block";
  document.querySelector("#web3").src = "https://www.bonappetit.com/story/strawberry-candies-nostalgia";
  document.querySelector("#inserts").style.backgroundColor = "gray";
}

function func4() {
  document.querySelector("#web4").style.display = "block";
  document.querySelector("#web4").src = "https://psychcentral.com/blog/tips-for-being-more-patient-with-your-kids";
}

function func5() {
  document.querySelector("#web5").style.display = "block";
  document.querySelector("#web5").src = 
    "https://target.scene7.com/is/image/Target/GUEST_44d55f3d-a0d4-4ce6-896f-b9f660c58716?wid=488&hei=488&fmt=pjpeg";
    document.querySelector("#web5").style.height = "65%";
}

function func6() {
  document.querySelector("#web6").style.display = "block";
  document.querySelector("#web6").src = 
    "https://i.pinimg.com/originals/00/ff/07/00ff07cde7fc339571fd10a266744200.gif";
  document.querySelector("#web7").style.height = "55%";
}

function func7() {
  document.querySelector("#web7").style.display = "block";
  document.querySelector("#web7").src =
    "https://i.pinimg.com/originals/c5/c6/73/c5c673dc3cb4ebd03675713b984a25cd.gif";
  document.querySelector("#inserts").style.backgroundColor = "pink";
  }

// for func8 temporary pfp change
function pfpChange() {
  document.getElementById('pfp').innerHTML = ":)";
  document.querySelector("#inserts").style.backgroundColor = "pink";
  document.querySelector("#web8").src = "https://media.istockphoto.com/id/1461182793/vector/cute-teddy-bear-winking-eye-with-red-heart-cartoon-vector-illustration.jpg?s=612x612&w=0&k=20&c=HyZ1KmOp8h155HqNmYVlWQ4fEL7AzDs5KuWU-i6HM6c=";
  document.querySelector("#web8").style.height = "80%";
}

function func8() {
  document.querySelector("#web8").style.display = "block";
  document.querySelector("#web8").src = "https://media.istockphoto.com/id/1423810710/vector/children-arguing-over-teddy-bear-toy-vector-cartoon-illustration.jpg?s=612x612&w=0&k=20&c=_tyQwTjBJPRDyeBkE0njTiSK0JvVdufsagomRfuNxHE=";
  document.querySelector("#inserts").style.backgroundColor = "maroon";
  document.getElementById('pfp').innerHTML = ":(";
  setInterval(pfpChange, 10000);
  clearInterval();

}

function func9() {
  document.querySelector("#web9").style.display = "block";
  document.querySelector("#web9").style.height = "85%";
  document.querySelector("#web9").src = "https://img.freepik.com/free-vector/get-well-soon-with-cute-bear_23-2148500957.jpg";
}