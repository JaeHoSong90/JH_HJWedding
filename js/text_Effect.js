// const app = document.getElementById(".ww-title");

// const displayLetters = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     addClassname(arr, i);
//   }
// };
// const addClassname = (word) => {
//   const letters = [];
//   const content = word.innerHTML;

//   word.innerHTML = "";

//   for (let i = 0; i < content.length; i++) {
//     let letter = document.createElement("span");
//     letter.className = "letter";
//     letter.innerHTML = content.charAt(i);
//     word.appendChild(letter);
//     letters.push(letter);
//   }

//   displayLetters(letters);
// };
// splitLetters();
// .ww-title 클래스를 가진 모든 요소에 적용
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".ww-title");

  const splitLetters = () => {
    elements.forEach((element) => {
      addClassname(element);
    });
  };

  const addClassname = (word) => {
    const letters = [];
    const content = word.textContent.trim();

    word.innerHTML = "";

    for (let i = 0; i < content.length; i++) {
      const letter = document.createElement("span");
      letter.className = "letter";
      letter.innerText = content.charAt(i);
      word.appendChild(letter);
      letters.push(letter);
    }
  };

  splitLetters();
});
