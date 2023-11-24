// -------------------------------------- 1페이지 다운화살표 --------------------------------------
function downPage() {
  // 위치 계산
  const windowHeight = window.innerHeight;
  const destination = windowHeight;

  // 부드러운 스크롤
  window.scrollTo({
    top: destination,
    behavior: "smooth",
  });
}
// -------------------------------------- 2페이지 moveBtn 관련 --------------------------------------

/*지혜js */
document.addEventListener("DOMContentLoaded", function () {
  const imgList = [
    "../static/image/exImg1.png",
    "../static/image/exImg2.png",
    "../static/image/exImg3.png",
    "../static/image/exImg4.png",
    "../static/image/exImg4.png",
    "../static/image/exImg4.png",
  ];
  let index = 0;
  const lastImgNum = imgList.length;
  const items = document.querySelectorAll(".item");

  // 좌측버튼 클릭시 changeImg 함수 사용
  document.getElementById("leftBtn").addEventListener("click", function () {
    index = (index - 1 + lastImgNum) % lastImgNum;
    showImage(index);
  });

  // 우측버튼 클릭시 changeImg 함수 사용
  document.getElementById("rightBtn").addEventListener("click", function () {
    index = (index + 1) % lastImgNum;
    showImage(index);
  });

  // 초기화 함수
  function showImage(index) {
    const dtimgBox = document.querySelector(".dtimgBox");
    const itemWidth = document.querySelector(".item").offsetWidth;
    const newPosition = -itemWidth * index;
    dtimgBox.style.transition = "transform 0.5s ease";
    dtimgBox.style.transform = `translateX(${newPosition}px)`;

    items.forEach((item) => {
      let dataIndex = parseInt(item.getAttribute("data-index"));
      if (dataIndex === index) {
        item.style.opacity = 0.55;
        item.style.transform = "scale(0.65) translateX(20vw)";
        item.style.zIndex = "-999";
      } else if (dataIndex === index + 1) {
        item.style.opacity = 1;
        item.style.transform = "scale(0.9)";
        item.style.zIndex = "999";
      } else if (dataIndex === index + 2) {
        item.style.opacity = 0.55;
        item.style.transform = "scale(0.65) translateX(-20vw)";
        item.style.zIndex = "-999";
      } else if (dataIndex < index - 1) {
        item.style.display = 0;
        item.style.transform = "scale(0.65) translateX(-20vw)";
      } else if (dataIndex > index + 2) {
        item.style.opacity = 0;
        item.style.transform = "scale(0.65) translateX(20vw)";
      } else {
        item.style.opacity = 0;
        item.style.transform = "scale(0.65)";
      }
    });
  }

  // 초기화 함수 호출
  showImage(index);
});

document.addEventListener("DOMContentLoaded", function () {
  var dropdownTrigger = document.querySelector(".menu_wrap .dep1");

  // Toggle dropdown on click
  dropdownTrigger.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent the click event from reaching the document
      toggleDropdown();
  });

  // Hide dropdown when clicking outside the dropdown
  document.addEventListener("click", function () {
      hideDropdown();
  });

  // Prevent hiding the dropdown when clicking inside it
  dropdownTrigger.addEventListener("click", function (event) {
      event.stopPropagation();
  });
});

function toggleDropdown() {
  var dep1 = document.querySelector(".menu_wrap .dep1");
  dep1.classList.toggle("show");
}

function hideDropdown() {
  var dep1 = document.querySelector(".menu_wrap .dep1");
  dep1.classList.remove("show");
}



var currentYear = 11; // 초기 선택 학년
var imageList = {
  10: [
    "../static/image/ideathon1.png",
    "../static/image/ideathon2.png",
    "../static/image/ideathon3.png",
  ],
  11: [
    "../static/image/ideathon4.png",
    "../static/image/ideathon5.png",
    "../static/image/ideathon6.png",
  ],
  12: [
    "../static/image/ideathon1.png",
    "../static/image/ideathon2.png",
    "../static/image/ideathon3.png",
  ],
  13: [
    "../static/image/ideathon4.png",
    "../static/image/ideathon5.png",
    "../static/image/ideathon6.png",
  ],
};

var descriptionList = {
  10: [
    { account: "예시", name: "예시" },
    { account: "예시", name: "예시" },
    { account: "예시", name: "예시" },
  ],
  11: [
    { account: "더 나은 건강, 더 행복한 삶", name: "RE : BORN" },
    { account: "필요한 약을 클릭 한번으로", name: "PHAMPHAM" },
    { account: "도대체 가능한 날이 언제야", name: "이때 어때" },
  ],
  12: [
    { account: "예시", name: "예시" },
    { account: "예시", name: "예시" },
    { account: "예시", name: "예시" },
  ],
  13: [
    { account: "예시", name: "예시" },
    { account: "예시", name: "예시" },
    { account: "예시", name: "예시" },
  ],
};

function changeYear(year) {
  currentYear = year;
  updateContent();
  //toggleDropdown 함수는 정의되어 있지 않아 주석 처리
  toggleDropdown(event);
}

function updateContent() {
  var imageBox = document.getElementById("imageBox");
  var descriptionBox = document.getElementById("descriptionBox");

  // 이미지 업데이트
  imageBox.innerHTML = "";
  for (var i = 0; i < imageList[currentYear].length; i++) {
    var img = document.createElement("img");
    img.src = imageList[currentYear][i];
    imageBox.appendChild(img);
  }

  // 설명 업데이트
  descriptionBox.innerHTML = "";
  for (var j = 0; j < descriptionList[currentYear].length; j++) {
    var accountName = descriptionList[currentYear][j].account;
    var projectName = descriptionList[currentYear][j].name;
    var description = document.createElement("div");
    description.textContent = accountName + ": " + projectName;
    descriptionBox.appendChild(description);
  }

  // 현재 년도 업데이트
  var currentYearElement = document.getElementById("currentYear");
  currentYearElement.textContent = currentYear + "th";
}

// 초기 로딩 시 컨텐츠 업데이트
updateContent();