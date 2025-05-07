let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
console.log(totalSlides);

function showSlide(index) {
    slides[currentIndex].classList.remove('active');
    console.log(currentIndex);
    currentIndex = (index + totalSlides) % totalSlides;
    slides[currentIndex].style.width = '50vw';
    // slides[currentIndex].style.height = '50vw';

    slides[currentIndex].classList.add('active');
    console.log(slides[currentIndex]);
    
    console.log(slides[currentIndex].clientWidth);
    console.log(slides[currentIndex].clientHeight);
    
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