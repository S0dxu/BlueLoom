let currentSlide = 0;
let slides = [];
let totalSlides = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createSlides(data) {
    const slidesContainer = document.querySelector('.cards');

    const shuffledSlides = shuffleArray(data.products);

    shuffledSlides.forEach((slideData) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = slideData.image;
        img.classList.add('slide');
        li.appendChild(img);
        slidesContainer.appendChild(li);
    });

    slides = document.querySelectorAll('.slide');
    totalSlides = slides.length;

    showSlide(currentSlide);
    setInterval(nextSlide, 5000);
}

fetch('products.json')
    .then(response => response.json())
    .then(data => {
        createSlides(data);
    })
    .catch(error => {
        console.error('error:', error);
    });
