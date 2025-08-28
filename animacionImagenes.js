// Variables globales
        let currentIndex = 0;
        let autoPlayInterval;
        const slides = document.querySelector('.slides');
        const images = document.querySelectorAll('.slides img');
        const totalImages = images.length;
        const prevBtn = document.getElementById("prev");
        const nextBtn = document.getElementById("next");
        const indicatorsContainer = document.getElementById("indicators");

        // Crear indicadores
        for (let i = 0; i < totalImages; i++) {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            if (i === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => showSlide(i));
            indicatorsContainer.appendChild(indicator);
        }

        const indicators = document.querySelectorAll('.indicator');

        // Función para mostrar una diapositiva específica
        function showSlide(i) {
            // Detener el autoplay temporalmente al interactuar manualmente
            resetAutoPlay();
            
            // Ajustar el índice si está fuera de los límites
            if (i < 0) currentIndex = totalImages - 1;
            else if (i >= totalImages) currentIndex = 0;
            else currentIndex = i;

            // Aplicar la transformación
            const offset = -currentIndex * 100;
            slides.style.transform = `translateX(${offset}%)`;
            
            // Actualizar indicadores
            updateIndicators();
        }

        // Función para actualizar los indicadores
        function updateIndicators() {
            indicators.forEach((indicator, i) => {
                if (i === currentIndex) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
        }

        // Función para avanzar a la siguiente imagen
        function showNextImage() {
            showSlide(currentIndex + 1);
        }

        // Configurar event listeners para los botones
        nextBtn.addEventListener('click', () => {
            showSlide(currentIndex + 1);
        });
        
        prevBtn.addEventListener('click', () => {
            showSlide(currentIndex - 1);
        });

        // Función para iniciar/reiniciar el autoplay
        function startAutoPlay() {
            autoPlayInterval = setInterval(showNextImage, 4000);
        }

        // Función para reiniciar el autoplay
        function resetAutoPlay() {
            clearInterval(autoPlayInterval);
            startAutoPlay();
        }

        // Iniciar el autoplay
        startAutoPlay();