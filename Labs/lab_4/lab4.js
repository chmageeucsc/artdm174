// Student Name: Chantel Gee
// Assignment Name: Lab 4: Changing the DOM
// Date: 10.03.2024

document.addEventListener("DOMContentLoaded", initSlider);
document.querySelector(".grid").style.display = "none";
document.querySelector(".wJS").style.display = "block";
document.querySelector(".prev").style.display = "block";
document.querySelector(".next").style.display = "block";

// FIX MOBILE VIEW

// if (window.screen.innerWidth < 700 ) {
//   document.querySelector(".prev").style.display = "none";
//   document.querySelector(".next").style.display = "none";
// }

function initSlider() {

  const back_btn = document.querySelector(".prev");
  const next_btn = document.querySelector(".next");
  const slides = document.querySelector(".slides");
  const slide = slides.querySelectorAll("img");

  // hide all images
  slide.forEach((s) => {
    s.classList.add("hide");
  });

  // show first slide
  slide[0].classList.remove("hide");

  next_btn.addEventListener("click",changeSlide);
  back_btn.addEventListener("click", changeSlide);

  const alt = slides[0].getAttribute('alt');
  // Get the figcaption element
  const figcaption = document.querySelector("figcaption"); 
  // Change the text content
  figcaption.textContent = alt; 

}

function changeSlide(e) {
  const slides = document.querySelector(".slides");
  const slide = slides.querySelectorAll("img");
  let showing = document.querySelector(".current");
  let nextUp = "";

  // check which button was pressed
  if(e.target.className == "prev") {
    nextUp = showing.previousElementSibling;
  }
  if(e.target.className == "next") {
    nextUp = showing.nextElementSibling;
  }

  // hide current image
  showing.classList.toggle("hide");
  showing.classList.toggle("current");

  // check nextUp
  if(!nextUp) {
    nextUp = slide[slide.length - 1];
  }

  // check for next image
  if (nextUp.nodeName !== "IMG") {
    nextUp = slide[0];
  }

  // show next image
  nextUp.classList.remove("hide");
  nextUp.classList.add("current");
  // check alt text of next photo
  var alt = nextUp.getAttribute("alt");
  const figcaption = document.querySelector("figcaption"); 
  // change the text content
  figcaption.textContent = alt; 
  
}
