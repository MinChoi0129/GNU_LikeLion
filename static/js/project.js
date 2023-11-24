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

function changeYear(year) {
  // currentYear 엘리먼트에 year의 내용을 설정
  document.getElementById('currentYear').innerText = year;

  /* 기수마다 사진과 설명  추가*/
}