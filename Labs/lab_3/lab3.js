function position(event) {
  let x = event.clientX;
  let y = event.clientY;
  document.getElementById("X").value = x;
  document.getElementById("Y").value = y;
}

var dot = document.getElementById('dot');
  document.body.addEventListener('click', (e) => {
    dot.style.transform = `translateY(${e.clientY - 100}px)`;
    dot.style.transform += `translateX(${e.clientX - 25}px)`;
    dot.style.opacity = 1;
    console.log("Current position of ball is X: " + e.clientX + ", Y: " + e.clientY)
  }, false);

// window.addEventListener('load',function(){
  
// });
