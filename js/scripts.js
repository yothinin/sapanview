let slideIndex = 1;
let slideInterval;
let startTime;

showSlides(slideIndex);

function startSlideShow() {
  startTime = Date.now();
  slideInterval = setInterval(() => {
    plusSlides(1);
   }, 10000);
}

// เปิดส่วนนี้เพื่อมองวินาทีที่นับ
// timeInterval = setInterval(() => {
//   logElapsedTime();
// }, 1000);

function logElapsedTime() {
  let elapsedTime = Math.floor((Date.now() - startTime) / 1000); // Time in seconds
  console.log(`Elapsed Time: ${elapsedTime} seconds`);
}

function resetSlideShow() {
  clearInterval(slideInterval);
  startSlideShow();
}

function plusSlides(n) {
  showSlides(slideIndex += n);
  resetSlideShow();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  resetSlideShow();
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

startSlideShow();

document.addEventListener ('DOMContentLoaded', function(){
    const menuItems = document.querySelectorAll ('.topnav a');
    menuItems.forEach(item => {
        item.addEventListener ('click', function (e) {
            menuItems.forEach (link => link.classList.remove ('active'));
            e.target.classList.add('active');
        });
    });
});


function myFunction() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}