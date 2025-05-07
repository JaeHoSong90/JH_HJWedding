// let currentIndex = 0;
// const slides = document.querySelectorAll('.slide');
// const totalSlides = slides.length;
// console.log(totalSlides);

// function showSlide(index) {
//     slides[currentIndex].classList.remove('active');
//     console.log(currentIndex);
//     currentIndex = (index + totalSlides) % totalSlides;
//     slides[currentIndex].style.width = '50vw';
//     // slides[currentIndex].style.height = '50vw';

//     slides[currentIndex].classList.add('active');
//     console.log(slides[currentIndex]);

//     console.log(slides[currentIndex].clientWidth);
//     console.log(slides[currentIndex].clientHeight);

// }

// function nextSlide() {
//     showSlide(currentIndex + 1);
// }

// function prevSlide() {
//     showSlide(currentIndex - 1);
// }

// // 초기 활성화
// slides[currentIndex].classList.add('active');

// // 자동 슬라이드
// setInterval(nextSlide, 5000);

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;
let autoSlideInterval;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            dots[i].classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentSlide = i;
        showSlide(currentSlide);
        resetAutoSlide();
    });
});

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000); // 5초마다 이동
}
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

showSlide(currentSlide);
// startAutoSlide();