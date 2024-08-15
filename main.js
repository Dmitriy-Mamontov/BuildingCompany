let currentSlide = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const dotsContainer = document.querySelector('.dots');

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    document.querySelector('.slides').style.transform = `translateX(${-currentSlide * 100}%)`;
    updateDots();
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function createDots() {
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.addEventListener('click', () => showSlide(i));
        dotsContainer.appendChild(dot);
    }
    updateDots();
}

createDots();
showSlide(currentSlide);

setInterval(nextSlide, 3000);