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
// Variable to track the current image index
var currentIndex = 0;

// Function to change the year and reset images to the first one
function changeYear(year) {
  // currentYear 엘리먼트에 year의 내용을 설정
  document.getElementById("currentYear").innerText = year;

  // 객체에서 선택한 연도에 해당하는 이미지 배열 가져오기
  var images = {
    '10th': [
      "../static/image/hakathon1.png",
      "../static/image/hakathon2.png",
      "../static/image/hakathon4.png",
      "../static/image/hakathon5.png",
      "../static/image/ideathon5.png",
      "../static/image/ideathon6.png",
    ],
    '11th': [
      "../static/image/ideathon1.png",
      "../static/image/ideathon2.png",
      "../static/image/ideathon3.png",
      "../static/image/ideathon1.png",
      "../static/image/ideathon2.png",
      "../static/image/ideathon3.png",
    ],
    '12th': [
      "../static/image/hakathon1.png",
      "../static/image/hakathon2.png",
      "../static/image/hakathon4.png",
      "../static/image/hakathon5.png",
      "../static/image/ideathon5.png",
      "../static/image/ideathon6.png",
    ],
    '13th': [
      "../static/image/hakathon1.png",
      "../static/image/hakathon2.png",
      "../static/image/hakathon4.png",
      "../static/image/hakathon5.png",
      "../static/image/ideathon5.png",
      "../static/image/ideathon6.png",
    ],
  };

  // Reset currentIndex to 0
  currentIndex = 0;

  // dtimgBox의 각 이미지 엘리먼트에 소스 업데이트
  var imgElements = document.querySelectorAll(".dtimgBox .item img");
  for (var i = 0; i < imgElements.length; i++) {
    imgElements[i].src = images[year][i];
  }

  // Scroll back to the leftmost position
  var imageContainer = document.querySelector(".dtimgBox");
  imageContainer.scrollLeft = 0;
}

// Add an event listener to the dropdown to reset images and scroll back when clicked
var dropdownBar = document.querySelector(".dropDownBar");
dropdownBar.addEventListener("click", function () {
  // Call the changeYear function with the current selected year
  var currentYear = document.getElementById("currentYear").innerText;
  changeYear(currentYear);
});
