// const symbols = ['💖', '🌸', '💗', '🌼', '💞'];

// function createParticle() {
//   const particle = document.createElement('div');
//   particle.classList.add('particle');
//   particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
//   particle.style.left = Math.random() * 100 + 'vw';
//     particle.style.top = '-5vh';
//     particle.style.fontSize = Math.random() * 20 + 20 + 'px';

//     const duration = Math.random() * 5 + 5; 
//   particle.style.animationDuration = duration + 's';
//   document.body.appendChild(particle);

//   setTimeout(() => {
//     particle.remove();
//   }, duration * 1000 + 1000);
// }

// setInterval(createParticle, 600);


function createParticle() {
  const particle = document.createElement('img');
  particle.src = 'images/petal.png'; // 꽃잎 이미지
  particle.classList.add('particle');

  // 위치, 크기, 애니메이션 시간 설정
  particle.style.left = Math.random() * 90 + 'vw';
  particle.style.top = '-10vh';
  const size = Math.random() * 10 + 10; // 20~50px
  particle.style.width = size + 'px';
  particle.style.height = 'auto';

  const fallDuration = Math.random() * 30 + 10; // 5~10초
  const swayDuration = Math.random() * 2 + 1.5; // 1.5~3.5초

  particle.style.animationDuration = `${fallDuration}s, ${swayDuration}s`;
  particle.style.animationTimingFunction = `linear, ease-in-out`;

  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, fallDuration * 1000 + 1000);
}

setInterval(createParticle, 300);