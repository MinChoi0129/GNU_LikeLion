const question = [
  "매주 세션 하나요?",
  "세션은 어떻게 진행되나요?",
  "세션을 통해 뭘 얻을 수 있나요?",
  "세션은 어떤 시간에 진행되나요?",
  "세션에는 어떤 내용이 포함되나요?",
  "세션에는 어떤 도구나 프로그래밍 언어를 사용하나요?",
  "세션은 어떤 식으로 참여할 수 있나요?",
  "세션에는 어떤 수업 방식이 사용되나요?",
];
const answer = [
  "네, 매주 세션 하나씩 진행됩니다.",
  "세션은 2시간 동안 진행됩니다.",
  "세션을 통해 코딩을 배우고, 코딩을 통해 문제를 해결하는 방법을 배울 수 있습니다.",
  "세션은 일반적으로 화요일, 목요일 8시부터 시작됩니다.",
  "세션에는 기본적인 코딩 개념과 예제, 실습 등이 포함됩니다.",
  "세션에서는 주로 JavaScript와 HTML/CSS를 사용합니다.",
  "세션은 오프라인으로 진행되며, 환경 상의 문제가 있을 시 Zoom 등의 플랫폼을 통해 진행할 수 있습니다.",
  "세션에서는 강의와 실습을 조합한 형태로 진행됩니다.",
];
function show_faqs() {
  for (let i = 0; i < question.length; i++) {
    if (i == 0) {
      html = `<div class="faq-content-title"><div class="line-box"><div class="fixed_line"></div><div class="line untouched"></div></div>
              &nbsp;
              ${question[i]}
            </div>
            <div class="faq-content" hidden>${answer[i]}</div>`;
      document.getElementById("faq-list").innerHTML += html;
    } else {
      html = `<hr><div class="faq-content-title"><div class="line-box"><div class="fixed_line"></div><div class="line untouched"></div></div>
              &nbsp;
              ${question[i]}
            </div>
            <div class="faq-content" hidden>${answer[i]}</div>`;
      document.getElementById("faq-list").innerHTML += html;
    }
  }
}
function show_faq(n, i) {
  if (i == 0) {
    html = `<div class="faq-content-title"><div class="line-box"><div class="fixed_line"></div><div class="line"></div></div>
            &nbsp;
            ${question[n]}
          </div>
          <div class="faq-content" hidden>${answer[n]}</div>`;
    document.getElementById("faq-list").innerHTML += html;
  } else {
    html = `<hr><div class="faq-content-title"><div class="line-box"><div class="fixed_line"></div><div class="line"></div></div>
                &nbsp;
                ${question[n]}
              </div>
              <div class="faq-content" hidden>${answer[n]}</div>`;
    document.getElementById("faq-list").innerHTML += html;
  }
}

function addfaqEvent() {
  const faqItems = document.getElementsByClassName("faq-content-title");
  const faqArrow = document.getElementsByClassName("line");
  for (let i = 0; i < faqItems.length; i++) {
    faqItems[i].addEventListener("click", function () {
      if (faqItems[i].nextElementSibling.hidden === true) {
        faqItems[i].nextElementSibling.hidden = false;
        faqItems[i].nextElementSibling.classList.remove("fadeInUp");
        faqItems[i].nextElementSibling.classList.add("fadeInDown");
        faqArrow[i].classList.remove("untouched");
        faqArrow[i].classList.add("touched");
      } else {
        faqItems[i].nextElementSibling.classList.remove("fadeInDown");
        faqItems[i].nextElementSibling.classList.add("fadeInUp");
        faqArrow[i].classList.remove("touched");
        faqArrow[i].classList.add("untouched");
      }
    });
    faqItems[i].nextElementSibling.addEventListener("animationend", function () {
      if (faqItems[i].nextElementSibling.classList.contains("fadeInUp")) {
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
const myInput = document.getElementById('search');
const myButton = document.getElementById('searchBtn');

myInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    myButton.click();
  }
});
show_faqs();
addfaqEvent();

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  console.log(scrollPosition);
  if (scrollPosition >= 100) {
    document.getElementById("nav").style.backgroundColor = "black";
  } else {
    document.getElementById("nav").style.backgroundColor = "";
  }
});