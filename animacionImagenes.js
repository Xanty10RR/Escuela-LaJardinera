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