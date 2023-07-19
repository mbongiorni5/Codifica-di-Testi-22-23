var slideIndex = 1; //Codice per la galleria con le pagine di diario

document.addEventListener("DOMContentLoaded", function () {
  showSlide(slideIndex);
});

function plusSlides(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}

var nodoAvanti = document.querySelector(".prev");
var nodoIndietro = document.querySelector(".next");
nodoAvanti.addEventListener("click", function () {
  plusSlides(-1);
});
nodoIndietro.addEventListener("click", function () {
  plusSlides(1);
});
