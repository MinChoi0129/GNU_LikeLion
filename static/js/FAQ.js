const question = [
  "매주 세션 하나요?",
  "세션은 어떻게 진행되나요?",
  "세션을 통해 뭘 얻을 수 있나요?",
];
console.log("faq입니다")
const answer = [
  "네, 매주 세션 하나씩 진행됩니다.",
  "세션은 2시간 동안 진행됩니다.",
  "세션을 통해 코딩을 배우고, 코딩을 통해 문제를 해결하는 방법을 배울 수 있습니다.",
];
function show_faqs() {
  for (let i = 0; i < question.length; i++) {
    html = `<div class="faq-content-title"><img src="{% static 'image/plus.png' %}" style=" height:2vh; text-align: center;"
                class="plus"><img src="{% static 'image/minus.png' %}" style=" height:2vh; text-align: center;" class="minus">
              &nbsp;
              ${question[i]}
            </div>
            <div class="faq-content">${answer[i]}</div>`;
    document.getElementsByClassName("faq-list")[0].innerHTML += html;
  }
}
function show_faq(n) {
  html = `<div class="faq-content-title"><img src="{% static 'image/plus.png' %}" style=" height:2vh; text-align: center;"
                class="plus"><img src="{% static 'image/minus.png' %}" style=" height:2vh; text-align: center;" class="minus">
              &nbsp;
              ${question[n]}
            </div>
            <div class="faq-content">${answer[n]}</div>`;
  document.getElementsByClassName("faq-list")[0].innerHTML += html;
}
show_faqs();

const faqItems = document.getElementsByClassName("faq-content-title");
const plus = document.getElementsByClassName("plus");
const minus = document.getElementsByClassName("minus");
for (let i = 0; i < minus.length; i++) {
  minus[i].hidden = true;
}
for (let i = 0; i < faqItems.length; i++) {
  faqItems[i].nextElementSibling.hidden = true;
}

for (let i = 0; i < faqItems.length; i++) {
  faqItems[i].addEventListener("click", function () {
    if (faqItems[i].nextElementSibling.hidden === true) {
      faqItems[i].nextElementSibling.hidden = false;
      plus[i].hidden = true;
      minus[i].hidden = false;
    } else {
      faqItems[i].nextElementSibling.hidden = true;
      plus[i].hidden = false;
      minus[i].hidden = true;
    }
  });
}

function search() {
  document.getElementsByClassName("faq-list")[0].innerHTML = "";
  let input = document.getElementById("search").value;
  input = input.toLowerCase();
  search_result = new Set();
  for (let i = 0; i < question.length; i++) {
    if (question[i].toLowerCase().includes(input)) {
      search_result.add(i);
    }
    if (answer[i].toLowerCase().includes(input)) {
      search_result.add(i);
    }
  }
  search_result.forEach((index) => {
    show_faq(index);
  });
}

// 애니메이션 추가(내려오는 거, + - 등 추가적인 것들), 이미지Path수정, 검색 시 이벤트 리스너 추가(or 다른 방법), 검색 창 비울 시 전체 목록 보여주기