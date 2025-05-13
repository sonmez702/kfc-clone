let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideimage");
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
setInterval(() => {
    plusSlides(1);
}, 5000);

function closeModal(){
    document.getElementById('modal-overlay').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
}
function openModal(id){
    if(id == 1){
        document.getElementById('modal-overlay').style.display = 'flex';
        document.getElementById('modal').style.display = 'flex';
        document.getElementById('img').src = document.getElementById('img1').src;
        document.getElementById('title').innerHTML = 'MEGA ROLL 1+1';
        document.getElementById('price').innerHTML = '8.90 AZN';
    }
    if(id == 2){
        document.getElementById('modal-overlay').style.display = 'flex';
        document.getElementById('modal').style.display = 'flex';
        document.getElementById('img').src = document.getElementById('img2').src;
        document.getElementById('title').innerHTML = 'EKSKLUZIV KOMBO';
        document.getElementById('price').innerHTML = '21.60 AZN';
    }
    if(id == 3){
        document.getElementById('modal-overlay').style.display = 'flex';
        document.getElementById('modal').style.display = 'flex';
        document.getElementById('img').src = document.getElementById('img3').src;
        document.getElementById('title').innerHTML = 'AİLƏVİ KOMBO';
        document.getElementById('price').innerHTML = '43.60 AZN';
    }
}