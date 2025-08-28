let currentIndex = 0;
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const totalImages = images.length;

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextImage, 4000);
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  let index = 0;

  function showSlide(i) {
    if (i < 0) index = images.length - 1;
    else if (i >= images.length) index = 0;
    else index = i;

    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  prevBtn.addEventListener("click", () => showSlide(index - 1));
  nextBtn.addEventListener("click", () => showSlide(index + 1));

  // Autoplay cada 5s
  setInterval(() => showSlide(index + 1), 4000);
