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
  document.getElementById("currentYear").innerText = year;

  /* 기수마다 사진과 설명  추가*/
}

// Array to store image paths
var imagePaths = [
  "../static/image/ideathon1.png",
  "../static/image/ideathon2.png",
  "../static/image/ideathon3.png",
  "../static/image/ideathon1.png",
  "../static/image/ideathon2.png",
  "../static/image/ideathon3.png",
];

// Array to store descriptions for each image
var imageDescriptions = [
  { account: "더 나은 건강, 더 행복한 삶", name: "RE : BORN" },
  { account: "필요한 약을 클릭 한번으로", name: "PHAMPHAM" },
  { account: "도대체 가능한 날이 언제야", name: "이때 어때" },
  { account: "더 나은 건강, 더 행복한 삶", name: "RE : BORN" },
  { account: "필요한 약을 클릭 한번으로", name: "PHAMPHAM" },
  { account: "도대체 가능한 날이 언제야", name: "이때 어때" },
];

// Variable to track the current image index
var currentIndex = 0;

var staticURL = "/static/image/more.png"; // 정적 파일의 실제 경로로 수정

// Function to change the description based on the selected image index
function changeDescription(index) {
  var descriptionElement = document.querySelector(".explanation .account");
  var currentDescription = imageDescriptions[index];

  descriptionElement.innerHTML = `
      <div class="account">${currentDescription.account}
          <div class="name">${currentDescription.name}</div>
          <div class="view">VIEW MORE 
                <img class="more" src="${staticURL}" />
          </div>    
      </div>`;
}

// Event listeners for left and right buttons to change image and description
document.getElementById("leftBtn").addEventListener("click", function () {
  // Decrease the current index (looping back to the last image if at the first image)
  currentIndex = (currentIndex - 1 + imagePaths.length) % imagePaths.length;
  changeDescription(currentIndex);
});

document.getElementById("rightBtn").addEventListener("click", function () {
  // Increase the current index (looping back to the first image if at the last image)
  currentIndex = (currentIndex + 1) % imagePaths.length;
  changeDescription(currentIndex);
});

// Initial call to display the first image description
changeDescription(currentIndex);