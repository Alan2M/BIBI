  window.addEventListener("click", () => {
    const audio = document.getElementById("loveSong");
    audio.muted = false;
    audio.play();
  }, { once: true });

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

function moveSlide(direction) {
  const slides = document.querySelectorAll('.slide');
  const currentIndex = [...slides].findIndex(slide => slide.classList.contains('active'));

  // Remove slide atual
  slides[currentIndex].classList.remove('active');

  // Se for vídeo, pausar e reiniciar
  if (slides[currentIndex].tagName === 'VIDEO') {
    slides[currentIndex].pause();
    slides[currentIndex].currentTime = 0;
  }

  // Calcular novo índice
  let newIndex = currentIndex + direction;
  if (newIndex < 0) newIndex = slides.length - 1;
  if (newIndex >= slides.length) newIndex = 0;

  // Ativar novo slide
  slides[newIndex].classList.add('active');

  // Se for vídeo, dar play
  if (slides[newIndex].tagName === 'VIDEO') {
    slides[newIndex].play();
  }
}


// Auto slide (opcional)
setInterval(() => {
  moveSlide(1);
}, 5000); // Troca a cada 5 segundos
