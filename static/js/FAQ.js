const question = [
  "매주 세션 하나요?",
  "세션은 어떻게 진행되나요?",
  "세션을 통해 뭘 얻을 수 있나요?",
];
console.log("faq입니다");
const answer = [
  "네, 매주 세션 하나씩 진행됩니다.",
  "세션은 2시간 동안 진행됩니다.",
  "세션을 통해 코딩을 배우고, 코딩을 통해 문제를 해결하는 방법을 배울 수 있습니다.",
];
function show_faqs() {
  for (let i = 0; i < question.length; i++) {
    if (i == 0) {
      html = `<div class="faq-content-title"><div class="triangle"></div>
              &nbsp;
              ${question[i]}
            </div>
            <div class="faq-content">${answer[i]}</div>`;
      document.getElementById("faq-list").innerHTML += html;
    } else {
      html = `<hr><div class="faq-content-title">
              &nbsp;
              ${question[i]}
            </div>
            <div class="faq-content">${answer[i]}</div>`;
      document.getElementById("faq-list").innerHTML += html;
    }
  }
}
function show_faq(n, i) {
  if (i == 0) {
    html = `<div class="faq-content-title">
            &nbsp;
            ${question[n]}
          </div>
          <div class="faq-content">${answer[n]}</div>`;
    document.getElementById("faq-list").innerHTML += html;
  } else {
    html = `<hr><div class="faq-content-title">
                &nbsp;
                ${question[n]}
              </div>
              <div class="faq-content">${answer[n]}</div>`;
    document.getElementById("faq-list").innerHTML += html;
  }
}

function addfaqEvent() {
  const faqItems = document.getElementsByClassName("faq-content-title");

  for (let i = 0; i < faqItems.length; i++) {
    faqItems[i].addEventListener("click", function () {
      if (faqItems[i].nextElementSibling.hidden === true) {
        faqItems[i].nextElementSibling.hidden = false;
      } else {
        faqItems[i].nextElementSibling.hidden = true;
      }
    });
  }
}

function search() {
  document.getElementById("faq-list").innerHTML = "";
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
  search_result = Array.from(search_result);
  for (let i = 0; i < search_result.length; i++) {
    show_faq(search_result[i], i);
  }
  addfaqEvent();
}

show_faqs();
addfaqEvent();

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  console.log(scrollPosition);
  if (scrollPosition >= 100) {
    document.getElementById('nav').style.backgroundColor = 'black';
  } else {
    document.getElementById('nav').style.backgroundColor = '';
  }
});
// 애니메이션 추가(내려오는 거, + - 등 추가적인 것들), 이미지Path수정, 검색 시 이벤트 리스너 추가(or 다른 방법), 검색 창 비울 시 전체 목록 보여주기
