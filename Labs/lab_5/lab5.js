// Student Name: Chantel Gee
// Assignment Name: Lab 5: Audio and Video
// Date: 10.21.2024

document.addEventListener("DOMContentLoaded", init);

function init() {
  /**
   * Shortcut variables
   */
  const shopChannel = document.querySelector(".shop-channel");
  const teddy = document.querySelector(".teddy");
  const ff = document.getElementById("ff");
  const slo = document.getElementById("slo");
  const normal = document.getElementById("normal");
  const pick = document.getElementById("pick");

  /**
   * prepare the audio and video for playing
   */
  shopChannel.src = "audio/MiiPlaza.mp3";
  shopChannel.load();
  shopChannel.volume = 0.5;

  //set video's initial volume
  teddy.volume = 0.5;

  /**
   * create the button event listeners to control the audio
   */

  ff.addEventListener("click", (e) => {
    shopChannel.playbackRate = 2;
  });

  slo.addEventListener("click", (e) => {
    shopChannel.playbackRate = 0.5;
  });

  normal.addEventListener("click", (e) => {
    shopChannel.playbackRate = 1;
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

  let textTrackElem = document.getElementById("text-track");

  textTrackElem.addEventListener("cuechange", (event) => {
    let cues = event.target.track.activeCues;
  });
} // end init function