// Student Name: Chantel Gee
// Assignment Name: Lab 5: Audio and Video
// Date: 10.21.2024

document.addEventListener("DOMContentLoaded", init);

function init() {
  /**
   * Audio shortcut variables
   */
  const shopChannel = document.querySelector(".shop-channel");
  const play = document.getElementById("play");
  const pause = document.getElementById("pause");
  const slo = document.getElementById("slo");
  const normal = document.getElementById("normal");
  const ff = document.getElementById("ff");
  const pick = document.getElementById("pick");

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

  /**
   * prepare the audio and video for playing
   */
  shopChannel.src = "audio/ShopChannel.mp3";
  shopChannel.load();
  shopChannel.volume = 0.5;

  //set video's initial volume
  teddy.volume = 0.5;

  /**
   * create the button event listeners to control the audio
   */

  play.addEventListener("click", (e) => {
    shopChannel.play();
    activeAudioButton(play);
    inactiveAudioButton(pause);
  });

  pause.addEventListener("click", (e) => {
    shopChannel.pause();
    inactiveAudioButton(play);
    activeAudioButton(pause);
  });

  slo.addEventListener("click", (e) => {
    shopChannel.playbackRate = 0.5;
    activeAudioButton(slo);
    inactiveAudioButton(normal);
    inactiveAudioButton(ff);
  });

  normal.addEventListener("click", (e) => {
    shopChannel.playbackRate = 1;
    inactiveAudioButton(slo);
    activeAudioButton(normal);
    inactiveAudioButton(ff);
  });

  ff.addEventListener("click", (e) => {
    shopChannel.playbackRate = 2;
    inactiveAudioButton(slo);
    inactiveAudioButton(normal);
    activeAudioButton(ff);
  });

  /**
   * select lists emit a "change" event when the choice is changed
   */
  pick.addEventListener("change", (e) => {
    // save the audio's current place in the song.
    let time = shopChannel.currentTime;

    shopChannel.src = e.target.value;

    shopChannel.load();
    shopChannel.play();

    // set the new song to the same place as the previous one.
    shopChannel.currentTime = time;
  });

   /**
   * create the button event listeners to control the video IN SECONDS
   */

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

function activeAudioButton(button){
  button.style.backgroundColor = "rgb(167, 254, 255)";
  button.style.border = "solid rgb(6, 6, 133)";
}

function inactiveAudioButton(button) {
  button.style.backgroundColor = "azure";
  button.style.border = "0";
}

function activeVideoButton(button){
  button.style.backgroundColor = "rgb(138, 27, 27)";
  button.style.border = "solid black";
  button.style.color = "white"
}

function inactiveVideoButton(button) {
  button.style.backgroundColor = "rgb(255, 240, 240)";
  button.style.border = "0";
  button.style.color = "rgb(117, 3, 3)"
}