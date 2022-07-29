
let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;
const buttonNext = document.getElementById('carousel__button--next');
const buttonPrev  = document.getElementById('carousel__button--prev')
const prev = document.getElementById('prev');
const next = document.getElementById('next');
buttonNext.addEventListener("click", function() {
    moveToNextSlide();
  });
buttonPrev.addEventListener("click", function() {
    moveToPrevSlide();
  });

buttonNext.addEventListener("mouseenter", function mouseIn(){
     next.style.stroke  = "hsl(26, 100%, 55%)";

})

buttonNext.addEventListener("mouseleave", function mouseOut(){
    next.style.stroke = "hsl(220, 13%, 13%)";
}) 

buttonPrev.addEventListener("mouseenter", function mouseIn(){
  prev.style.stroke  = "hsl(26, 100%, 55%)";

})

buttonPrev.addEventListener("mouseleave", function mouseOut(){
 prev.style.stroke = "hsl(220, 13%, 13%)";
}) 



function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  }

  slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}


