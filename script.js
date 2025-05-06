let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides[currentIndex].classList.remove('active');
    currentIndex = (index + totalSlides) % totalSlides;
    slides[currentIndex].classList.add('active');
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// 초기 활성화
slides[currentIndex].classList.add('active');

// 자동 슬라이드
setInterval(nextSlide, 5000);