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

var currentYear = '11th'; // 초기 선택 학년
var currentIndex = 0; // 초기 이미지 인덱스

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

var imageDescriptions = {
  '10th': [
    { account: "해커톤1", name: "해커톤1" },
    { account: "해커톤2", name: "해커톤2" },
    { account: "해커톤4", name: "해커톤4" },
    { account: "해커톤5", name: "해커톤5" },
    { account: "아이디어톤5", name: "아이디어톤5" },
    { account: "아이디어톤6", name: "아이디어톤6" },
  ],
  '11th': [
    { account: "더 나은 건강, 더 행복한 삶", name: "RE : BORN" },
    { account: "필요한 약을 클릭 한번으로", name: "PHAMPHAM" },
    { account: "도대체 가능한 날이 언제야", name: "이때 어때" },
    { account: "더 나은 건강, 더 행복한 삶", name: "RE : BORN" },
    { account: "필요한 약을 클릭 한번으로", name: "PHAMPHAM" },
    { account: "도대체 가능한 날이 언제야", name: "이때 어때" },
  ],
  '12th': [
    { account: "해커톤1", name: "해커톤1" },
    { account: "해커톤2", name: "해커톤2" },
    { account: "해커톤4", name: "해커톤4" },
    { account: "해커톤5", name: "해커톤5" },
    { account: "해커톤5", name: "해커톤5" },
    { account: "해커톤6", name: "해커톤6" },
  ],
  '13th': [
    { account: "해커톤1", name: "해커톤1" },
    { account: "해커톤2", name: "해커톤2" },
    { account: "해커톤4", name: "해커톤4" },
    { account: "해커톤5", name: "해커톤5" },
    { account: "해커톤5", name: "해커톤5" },
    { account: "해커톤6", name: "해커톤6" },
  ],
};

var staticURL = "/static/image/more.png"; // 정적 파일의 실제 경로로 수정

function changeYear(year) {
  // Update the current year
  currentYear = year;


  // Update the displayed year in the dropdown
  document.getElementById("currentYear").innerText = year;

  // Update the images
  var imgElements = document.querySelectorAll('.dtimgBox .item img');
  for (var i = 0; i < imgElements.length; i++) {
    imgElements[i].src = images[year][i];
  }

  // Update the description
  changeDescription(currentIndex);
}

// Function to change the description based on the selected image index
function changeDescription(index) {
  var descriptionElement = document.querySelector(".explanation .account");
  var currentDescription = imageDescriptions[currentYear][index];

  descriptionElement.innerHTML = `
      <div class="account">${currentDescription.account}
          <div class="name">${currentDescription.name}</div>
          <div class="view">VIEW MORE 
                <img class="more" src="${staticURL}" />
          </div>    
      </div>`;
}
// Event listener for year dropdown changes
var yearDropdown = document.getElementById("currentYear");

yearDropdown.addEventListener("change", function () {
  // Get the selected year from the dropdown
  var selectedYear = yearDropdown.value;

  // Update the images
  var imgElements = document.querySelectorAll('.dtimgBox .item img');
  for (var i = 0; i < imgElements.length; i++) {
    imgElements[i].src = images[selectedYear][i];
  }

  // Reset currentIndex to 0
  currentIndex = 0;

  // Update the description for the first image
  changeDescription(currentIndex);
});

// Event listeners for left and right buttons to change image and description
document.getElementById("leftBtn").addEventListener("click", function () {
  // Decrease the current index (looping back to the last image if at the first image)
  currentIndex = (currentIndex - 1 + images[currentYear].length) % images[currentYear].length;
  changeDescription(currentIndex);
});

document.getElementById("rightBtn").addEventListener("click", function () {
  // Increase the current index (looping back to the first image if at the last image)
  currentIndex = (currentIndex + 1) % images[currentYear].length;
  changeDescription(currentIndex);
});

changeDescription(currentIndex);



/* 3페이지 js */


/*지혜js */
document.addEventListener("DOMContentLoaded", function () {
  const imgList2 = [
    "../static/image/exImg1.png",
    "../static/image/exImg2.png",
    "../static/image/exImg3.png",
    "../static/image/exImg4.png",
    "../static/image/exImg4.png",
    "../static/image/exImg4.png",
  ];
  let index2 = 0;
  const lastImgNum2 = imgList2.length;
  const items2 = document.querySelectorAll(".item2");

  // 좌측버튼 클릭시 changeImg 함수 사용
  document.getElementById("leftBtn2").addEventListener("click", function () {
    index2 = (index2 - 1 + lastImgNum2) % lastImgNum2;
    showImage(index2);
  });

  // 우측버튼 클릭시 changeImg 함수 사용
  document.getElementById("rightBtn2").addEventListener("click", function () {
    index2 = (index2 + 1) % lastImgNum2;
    showImage(index2);
  });

  // 초기화 함수
  function showImage(index2) {
    const dtimgBox2 = document.querySelector(".dtimgBox2");
    const itemWidth2 = document.querySelector(".item2").offsetWidth;
    const newPosition2 = -itemWidth2 * index2;
    dtimgBox2.style.transition = "transform 0.5s ease";
    dtimgBox2.style.transform = `translateX(${newPosition2}px)`;

    items2.forEach((item2) => {
      let dataIndex = parseInt(item2.getAttribute("data-index"));
      if (dataIndex === index2) {
        item2.style.opacity = 0.55;
        item2.style.transform = "scale(0.65) translateX(20vw)";
        item2.style.zIndex = "-999";
      } else if (dataIndex === index2 + 1) {
        item2.style.opacity = 1;
        item2.style.transform = "scale(0.9)";
        item2.style.zIndex = "999";
      } else if (dataIndex === index2 + 2) {
        item2.style.opacity = 0.55;
        item2.style.transform = "scale(0.65) translateX(-20vw)";
        item2.style.zIndex = "-999";
      } else if (dataIndex < index2 - 1) {
        item2.style.display = 0;
        item2.style.transform = "scale(0.65) translateX(-20vw)";
      } else if (dataIndex > index2 + 2) {
        item2.style.opacity = 0;
        item2.style.transform = "scale(0.65) translateX(20vw)";
      } else {
        item2.style.opacity = 0;
        item2.style.transform = "scale(0.65)";
      }
    });
  }

  // 초기화 함수 호출
  showImage(index2);
});


var currentYear2 = '11th'; // 초기 선택 학년
var currentIndex2 = 0; // 초기 이미지 인덱스

var images2 = {
  '10th': [
    "../static/image/hakathon1.png",
    "../static/image/hakathon2.png",
    "../static/image/hakathon4.png",
    "../static/image/hakathon5.png",
    "../static/image/ideathon5.png",
    "../static/image/ideathon6.png",
  ],
  '11th': [
    "../static/image/hakathon3.png",
    "../static/image/hakathon4.png",
    "../static/image/ideathon5.png",
    "../static/image/ideathon3.png",
    "../static/image/ideathon4.png",
    "../static/image/ideathon5.png",
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

var imageDescriptions2 = {
  '10th': [
    { account: "누구든지 쉬운 디자인", name: "레터링 케이크 레시피" },
    { account: "경험을 사고 팔 수 있는", name: "당신의 경험" },
    { account: "해커톤4", name: "해커톤4" },
    { account: "해커톤5", name: "해커톤5" },
    { account: "아이디어톤5", name: "아이디어톤5" },
    { account: "아이디어톤6", name: "아이디어톤6" },
  ],
  '11th': [
    { account: "선생님을 위한 커뮤니티", name: "아낌없이 주는 나무" },
    { account: "수어 학습의 시작", name: "핸디" },
    { account: "휠체어와 함께 어디든지", name: "WHEEL WE GO" },
    { account: "선생님을 위한 커뮤니티", name: "아낌없이 주는 나무" },
    { account: "수어 학습의 시작", name: "핸디" },
    { account: "휠체어와 함께 어디든지", name: "WHEEL WE GO" },
  ],
  '12th': [
    { account: "해커톤1", name: "해커톤1" },
    { account: "해커톤2", name: "해커톤2" },
    { account: "해커톤4", name: "해커톤4" },
    { account: "해커톤5", name: "해커톤5" },
    { account: "해커톤5", name: "해커톤5" },
    { account: "해커톤6", name: "해커톤6" },
  ],
  '13th': [
    { account: "해커톤1", name: "해커톤1" },
    { account: "해커톤2", name: "해커톤2" },
    { account: "해커톤4", name: "해커톤4" },
    { account: "해커톤5", name: "해커톤5" },
    { account: "해커톤5", name: "해커톤5" },
    { account: "해커톤6", name: "해커톤6" },
  ],
};

var staticURL2 = "/static/image/more.png"; // 정적 파일의 실제 경로로 수정

function changeYear2(year2) {
  // Update the current year
  currentYear2 = year2;

  // Update the displayed year in the dropdown
  document.getElementById("currentYear2").innerText = year2;

  // Update the images
  var imgElements2 = document.querySelectorAll('.dtimgBox2 .item2 img');
  for (var i = 0; i < imgElements2.length; i++) {
    imgElements2[i].src = images[year2][i];
  }

  // Update the description
  changeDescription2(currentIndex2);
}

// Function to change the description based on the selected image index
function changeDescription2(index2) {
  var descriptionElement2 = document.querySelector(".explanation2 .account2");
  var currentDescription2 = imageDescriptions2[currentYear2][index2];

  descriptionElement2.innerHTML = `
      <div class="account2">${currentDescription2.account}
          <div class="name2">${currentDescription2.name}</div>
          <div class="view2">VIEW MORE 
                <img class="more2" src="${staticURL2}" />
          </div>    
      </div>`;
}
// Event listener for year dropdown changes
var yearDropdown2 = document.getElementById("currentYear2");

yearDropdown2.addEventListener("change", function () {
  // Get the selected year from the dropdown
  var selectedYear2 = yearDropdown2.value;

  // Update the images
  var imgElements2 = document.querySelectorAll('.dtimgBox2 .item2 img');
  for (var i = 0; i < imgElements2.length; i++) {
    imgElements2[i].src = images2[selectedYear2][i];
  }

  // Reset currentIndex to 0
  currentIndex2 = 0;

  // Update the description for the first image
  changeDescription2(currentIndex2);
});

// Event listeners for left and right buttons to change image and description
document.getElementById("leftBtn2").addEventListener("click", function () {
  // Decrease the current index (looping back to the last image if at the first image)
  currentIndex2 = (currentIndex2 - 1 + images2[currentYear2].length) % images2[currentYear2].length;
  changeDescription2(currentIndex2);
});

document.getElementById("rightBtn2").addEventListener("click", function () {
  // Increase the current index (looping back to the first image if at the last image)
  currentIndex2 = (currentIndex2 + 1) % images2[currentYear2].length;
  changeDescription2(currentIndex2);
});

changeDescription2(currentIndex2);
