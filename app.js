document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("todo-form");
    const input = document.getElementById("todo-input");
    const list = document.getElementById("todo-list");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // 페이지 새로고침 방지
  
      const text = input.value.trim();
      if (text === "") return;
  
      const li = document.createElement("li");
      li.textContent = text;
  
      // 완료/삭제 버튼 추가
      const doneBtn = document.createElement("button");
      doneBtn.textContent = "완료";
      doneBtn.addEventListener("click", function () {
        li.classList.toggle("done");
      });
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "삭제";
      deleteBtn.addEventListener("click", function () {
        list.removeChild(li);
      });
  
      li.appendChild(doneBtn);
      li.appendChild(deleteBtn);
  
      list.appendChild(li);
      input.value = ""; // 입력창 초기화
    });
  });
  