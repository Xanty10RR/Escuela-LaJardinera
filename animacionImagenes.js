document.addEventListener("DOMContentLoaded", function () {
  // --- Lógica del carrusel (solo si el carrusel existe en la página) ---
  const slidesContainer = document.querySelector(".slides");
  if (slidesContainer) {
    const images = slidesContainer.querySelectorAll("img");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    let currentIndex = 0;

    function showSlide(index) {
      if (index < 0) {
        currentIndex = images.length - 1;
      } else if (index >= images.length) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }
      slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener("click", () => showSlide(currentIndex - 1));
      nextBtn.addEventListener("click", () => showSlide(currentIndex + 1));
    }

    // Autoplay
    setInterval(() => showSlide(currentIndex + 1), 4000);
  }

  // Lógica de la animación de scroll (para todos los footer)
  const animatedElements = document.querySelectorAll(".scroll-effect");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Para que la animación no se repita
        }
      });
    },
    { threshold: 0.1 } // Se activa cuando el 10% del elemento es visible
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });
});