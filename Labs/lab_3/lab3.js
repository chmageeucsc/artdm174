// uses onmousemove to remember X and Y coordinates of mouse
function position(event) {
  let x = event.clientX;
  let y = event.clientY;
  document.getElementById("X").value = x;
  document.getElementById("Y").value = y;
}

// when pointer clicks within body, dot/ball moves to new position and outputs in the console log
var dot = document.getElementById('dot');
  document.body.addEventListener('click', (e) => {
    dot.style.transform = `translateY(${e.clientY - 280}px)`;
    dot.style.transform += `translateX(${e.clientX - 49}px)`;
    dot.style.opacity = 1;
    console.log("Current position of ball is X: " + e.clientX + ", Y: " + e.clientY);
  }, false);

// selects all images in the slider and current index is [0]
const slides = document.querySelectorAll(".slides img");
let current = 0; // current slide index
let interval_ID = null;

document.addEventListener("DOMContentLoaded", initSlider);

function initSlider() {
  if (slides.length > 0) {
    slides[current].classList.add("displaySlide");
    interval_ID = setInterval(nextSlide, 7000);
    // console.log(interval_ID) ID = 2
  }  
}

// if current slide index is greater than the length of thelist, go to the first photo in the list
// if current slide index is less than 0, go to the last photo in the list
function showSlide(index) {
  if (index >= slides.length) {
    current = 0;
  }
  else if (index < 0) {
    current = slides.length - 1;
  }
  // all photos should be invisible except the current slide index
  slides.forEach(slide => {
    slide.classList.remove("displaySlide");
  });
  slides[current].classList.add("displaySlide");
}

// stop animation and go to previous photo
function prevSlide() {
  clearInterval(interval_ID);
  current--;
  showSlide(current);
}

// go to next photo
function nextSlide() {
  current++;
  showSlide(current);
}