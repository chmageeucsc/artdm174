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
  });

  pause.addEventListener("click", (e) => {
    shopChannel.pause();
  });

  slo.addEventListener("click", (e) => {
    shopChannel.playbackRate = 0.5;
  });

  normal.addEventListener("click", (e) => {
    shopChannel.playbackRate = 1;
  });

  ff.addEventListener("click", (e) => {
    shopChannel.playbackRate = 2;
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
  });

  sweet.addEventListener("click", (e) => {
    teddy.currentTime = 26;
  });

  playful.addEventListener("click", (e) => {
    teddy.currentTime = 41.75;
  });

  patience.addEventListener("click", (e) => {
    teddy.currentTime = 64.9;
  });

  courage.addEventListener("click", (e) => {
    teddy.currentTime = 80.5;
  });

  love.addEventListener("click", (e) => {
    teddy.currentTime = 103.7;
  });

  end.addEventListener("click", (e) => {
    teddy.currentTime = 168;
  });

} // end init function