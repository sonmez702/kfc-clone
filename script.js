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
function openModal(e){
    document.getElementById('img').src = e.children[0].src;
    document.getElementById('title').textContent = e.children[1].textContent;
    document.getElementById('price').textContent = e.children[2].textContent;
    document.getElementById('modal-overlay').style.display = 'block';
    document.getElementById('modal').style.display = 'flex';
}
