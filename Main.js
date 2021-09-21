
var slideshow1 = document.getElementById("slideshow1");
slideshow1.currentSlideIndex = 1;
showSlides(slideshow1.currentSlideIndex, slideshow1);

var slideshow2 = document.getElementById("slideshow2");
slideshow2.currentSlideIndex = 1;
showSlides(slideshow2.currentSlideIndex, slideshow2);


function plusSlides(n, slideshow) {
  showSlides(slideshow.currentSlideIndex += n, slideshow);
}

function currentSlide(n, slideshow) {
  showSlides(slideshow.currentSlideIndex = n, slideshow);
}

function showSlides(n, slideshow) {
  
  	  var i;
  	  var slides = document.getElementsByClassName("mySlides");
  	  var dots = document.getElementsByClassName("dot");
  	  for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";  
	  }
  	  slideIndex++;
  	  if (slideIndex > slides.length) {slideIndex = 1}    
  	  for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
  	  }
  	  slides[slideIndex-1].style.display = "block";  
  	  dots[slideIndex-1].className += " active";
  	  setTimeout(showSlides, 3500); // Change image every 3.5 seconds
	}
