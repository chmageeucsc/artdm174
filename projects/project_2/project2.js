// Student Name: Chantel Gee
// Assignment Name: Project 2 - Photo Gallery
// Date: 10.15.2024

document.addEventListener("DOMContentLoaded", initSlider);

// for timer
let interval_ID = null;

function initSlider() {

  // desktop
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
  
  // desktop
  next_btn.addEventListener("click",changeSlide);
  back_btn.addEventListener("click", changeSlide);

  // slide show timer for desktop and mobile
  if (window.innerWidth >= 700 ) {
    interval_ID = setInterval(function() {
      next_btn.click();
    }, 5000);
  }

  // changes caption
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

  // check which button was pressed DESKTOP and MOBILE
  if(e.target.className == "prev") {
    nextUp = showing.previousElementSibling;
    clearInterval(interval_ID);
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
