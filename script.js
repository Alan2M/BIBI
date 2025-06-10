function playMusic() {
  const audio = document.getElementById("loveSong");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function moveSlide(n) {
  currentSlide = (currentSlide + n + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Auto slide (opcional)
setInterval(() => {
  moveSlide(1);
}, 5000); // Troca a cada 5 segundos
