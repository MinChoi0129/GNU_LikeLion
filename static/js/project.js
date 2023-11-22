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
// DOMContentLoaded 이벤트가 발생하면 실행되는 함수
document.addEventListener("DOMContentLoaded", function () {
    // 이미지 리스트 정의
    const imageList = {
        10: ["../static/image/ideathon6.png", "../static/image/ideathon5.png"],
        11: [
            "../static/image/ideathon4.png",
            "../static/image/ideathon5.png",
            "../static/image/ideathon6.png",
        ],
    };

    const descriptionLists = {
        10: [
            { account: "예시", name: "예시" },
            { account: "예시", name: "예시" },
        ],
        11: [
            { account: "더 나은 건강, 더 행복한 삶", name: "RE : BORN" },
            { account: "필요한 약을 클릭 한번으로", name: "PHAMPHAM" },
            { account: "도대체 가능한 날이 언제야", name: "이때 어때" },
        ],
    };

    // 초기 이미지 상태 설정
    let currentIndex = 0;
    let selectedYear = '11'; // 초기 선택된 년도

    // 이미지 컨테이너와 슬라이더 컨테이너 가져오기
    const imageContainers = document.querySelectorAll(".secondPage .eximg img");
    const accountElement = document.querySelector(".secondPage .account");
    const nameElement = document.querySelector(".secondPage .name");
    const currentYearElement = document.getElementById("currentYear"); // 현재 년도 엘리먼트

    // 10th, 11th 버튼 클릭 이벤트
    const yearButtons = document.querySelectorAll(".dep2Year");
    yearButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const clickedYear = button.textContent.replace(/\D+/g, ''); // 클릭한 버튼의 텍스트에서 숫자만 추출
            selectedYear = clickedYear; // 클릭한 년도로 설정
            currentIndex = 0; // 선택된 년도로 변경될 때 초기 인덱스 0으로 설정
            currentYearElement.textContent = clickedYear + "th"; // 현재 년도 업데이트
            updateImageState(); // 이미지와 설명 업데이트
        });
    });

    // 초기 상태 설정
    updateImageState();

    // 이미지 상태 업데이트 함수
    function updateImageState() {
        // 가운데 이미지 업데이트
        const currentImageList = imageList[selectedYear];
        const currentDescriptionList = descriptionLists[selectedYear];

        imageContainers[1].src = currentImageList[currentIndex];
        imageContainers[1].classList.remove("noFirstViewImg");
        imageContainers[1].classList.remove("noLastViewImg");

        // 이전, 다음 이미지의 인덱스 계산
        const prevIndex = (currentIndex - 1 + currentImageList.length) % currentImageList.length;
        const nextIndex = (currentIndex + 1) % currentImageList.length;

        // 양 옆 이미지 업데이트
        imageContainers[0].src = currentImageList[prevIndex];
        imageContainers[2].src = currentImageList[nextIndex];

        // 첫 번째 이미지일 때 클래스 추가
        if (currentIndex === 0) {
            imageContainers[0].classList.add("noFirstViewImg");
        } else {
            imageContainers[0].classList.remove("noFirstViewImg");
        }

        // 마지막 이미지일 때 클래스 추가
        if (currentIndex === currentImageList.length - 1) {
            imageContainers[2].classList.add("noLastViewImg");
        } else {
            imageContainers[2].classList.remove("noLastViewImg");
        }
        // 설명 엘리먼트 업데이트
        accountElement.textContent = currentDescriptionList[currentIndex].account;
        nameElement.textContent = currentDescriptionList[currentIndex].name;
    }

    // .moveBtn2 내부에서 오른쪽 버튼 클릭 이벤트
    const moveBtn = document.querySelector(".moveBtn");

    // 오른쪽 버튼 클릭 이벤트
    const rightButton = moveBtn.querySelector(".fa-circle-chevron-right");
    rightButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % imageList[selectedYear].length;
        updateImageState();
    });

    // 왼쪽 버튼 클릭 이벤트
    const leftButton = moveBtn.querySelector(".fa-circle-chevron-left");
    leftButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + imageList[selectedYear].length) % imageList[selectedYear].length;
        updateImageState();
    });
});


// -------------------------------------- 3페이지 moveBtn 관련 --------------------------------------
// -------------------------------------- 3페이지 moveBtn 관련 --------------------------------------
document.addEventListener("DOMContentLoaded", function () {
	const imageLists2 = {
	  10: ["../static/image/hakathon1.png", "../static/image/hakathon2.png"],
	  11: [
		"../static/image/hakathon3.png",
		"../static/image/hakathon4.png",
		"../static/image/hakathon5.png",
	  ],
	};
  
	const descriptionLists2 = {
	  10: [
		{ account2: "누구나 손 쉽게 디자인", name2: "레터링 케이크 레시피" },
		{ account2: "Dream Sketch", name2: "당신의 경험" },
	  ],
	  11: [
		{ account2: "교사들을 위한 커뮤니티", name2: "아낌없이 주는 나무" },
		{ account2: "수어 학습의 시작", name2: "핸디" },
		{ account2: "우리와 함께 나만의 모빌리티", name2: "WHEEL WE GO" },
	  ],
	};
  
	// 초기 이미지 상태 설정
	let currentIndex2 = 0;
	let selectedYear2 = "11"; // 초기 선택된 년도
  
	// DOM 요소 가져오기
	const imageContainers2 = document.querySelectorAll(".thirdPage .eximg2 img");
	const accountElement2 = document.querySelector(".thirdPage .account2");
	const nameElement2 = document.querySelector(".thirdPage .name2");
	const currentYearElement2 = document.getElementById("currentYear2"); // 현재 년도 엘리먼트
  
	updateImageState(); // 초기 상태 설정
  
	// 10th, 11th 버튼 클릭 이벤트
	const yearButtons = document.querySelectorAll(".dep2Year");
	yearButtons.forEach(function (button) {
	  button.addEventListener("click", function () {
		selectedYear2 = button.textContent.replace(/\D+/g, ""); // 클릭한 버튼의 텍스트에서 숫자만 추출
		currentIndex2 = 0; // 선택된 년도로 변경될 때 초기 인덱스 0으로 설정
		currentYearElement2.textContent = selectedYear2 + "th"; // 현재 년도 업데이트
		updateImageState(); // 이미지와 설명 업데이트
	  });
	});
  
	// 이미지 상태 업데이트 함수
	function updateImageState() {
	  // 가운데 이미지 업데이트
	  const currentImageList2 = imageLists2[selectedYear2];
	  const currentDescriptionList2 = descriptionLists2[selectedYear2];
  
	  imageContainers2[1].src = currentImageList2[currentIndex2];
	  imageContainers2[1].classList.remove("noFirstViewImg");
	  imageContainers2[1].classList.remove("noLastViewImg");
  
	  // 이전, 다음 이미지의 인덱스 계산
	  const prevIndex2 =
		(currentIndex2 - 1 + currentImageList2.length) % currentImageList2.length;
	  const nextIndex2 = (currentIndex2 + 1) % currentImageList2.length;
  
	  // 양 옆 이미지 업데이트
	  imageContainers2[0].src = currentImageList2[prevIndex2];
	  imageContainers2[2].src = currentImageList2[nextIndex2];
  
	  // 첫 번째 이미지일 때 클래스 추가
	  if (currentIndex2 === 0) {
		imageContainers2[0].classList.add("noFirstViewImg");
	  } else {
		imageContainers2[0].classList.remove("noFirstViewImg");
	  }
  
	  // 마지막 이미지일 때 클래스 추가
	  if (currentIndex2 === currentImageList2.length - 1) {
		imageContainers2[2].classList.add("noLastViewImg");
	  } else {
		imageContainers2[2].classList.remove("noLastViewImg");
	  }
  
	  // 설명 엘리먼트 업데이트
	  accountElement2.textContent =
		currentDescriptionList2[currentIndex2].account2;
	  nameElement2.textContent = currentDescriptionList2[currentIndex2].name2;
	}
  
	// .moveBtn2 내부에서 오른쪽 버튼 클릭 이벤트
	const moveBtn2 = document.querySelector(".moveBtn2");
  
	// 오른쪽 버튼 클릭 이벤트
	const rightButton = moveBtn2.querySelector(".fa-circle-chevron-right");
	rightButton.addEventListener("click", function () {
	  currentIndex2 = (currentIndex2 + 1) % imageLists2[selectedYear2].length;
	  updateImageState();
	});
  
	// 왼쪽 버튼 클릭 이벤트
	const leftButton = moveBtn2.querySelector(".fa-circle-chevron-left");
	leftButton.addEventListener("click", function () {
	  currentIndex2 =
		(currentIndex2 - 1 + imageLists2[selectedYear2].length) %
		imageLists2[selectedYear2].length;
	  updateImageState();
	});
  });
  
  // 드롭다운 클릭 시 년도 변경 함수
  function changeYear(element) {
	const selectedYear2 = element.textContent.replace(/\D+/g, ""); // 클릭한 버튼의 텍스트에서 숫자만 추출
	document.getElementById("currentYear2").textContent = selectedYear2 + "th."; // 현재 년도 업데이트
	updateImageState(); // 이미지와 설명 업데이트
  }
  
//한번에 100vh씩 내려감
// 휠 이벤트 리스너 등록
window.addEventListener("wheel", function (event) {
  // deltaY 값이 음수이면 위로 스크롤, 양수이면 아래로 스크롤
  if (event.deltaY < 0) {
    upPage();
  } else {
    downPage();
  }
});

// downPage 함수 정의
function downPage() {
  // 현재 스크롤 위치 계산
  const currentScroll = window.scrollY || document.documentElement.scrollTop;

  // 다음 위치 계산 (현재 위치에서 100vh만큼 이동)
  const destination = currentScroll + window.innerHeight;

  // 부드러운 스크롤
  window.scrollTo({
    top: destination,
    behavior: "smooth",
  });
}

// upPage 함수 정의
function upPage() {
  // 현재 스크롤 위치 계산
  const currentScroll = window.scrollY || document.documentElement.scrollTop;

  // 다음 위치 계산 (현재 위치에서 100vh만큼 이동)
  const destination = currentScroll - window.innerHeight;

  // 부드러운 스크롤
  window.scrollTo({
    top: destination,
    behavior: "smooth",
  });
}

// 드롭다운 상태를 저장할 변수
let isDropDownOpen = false;

// 클릭 이벤트 리스너 등록
document.querySelector(".dropDownBar").addEventListener("click", function () {
  // 드롭다운 상태 업데이트
  isDropDownOpen = !isDropDownOpen;

  // 드롭다운 메뉴 보이기 또는 숨기기
  document.querySelector(".dep2").style.display = isDropDownOpen
    ? "block"
    : "none";
});

// 문서 클릭 이벤트 리스너 등록
document.addEventListener("click", function (event) {
  // 클릭된 요소가 드롭다운 바나 드롭다운 메뉴 안에 있는지 확인
  const isClickedInsideDropDown =
    document.querySelector(".dropDownBar").contains(event.target) ||
    document.querySelector(".dep2").contains(event.target);

  // 클릭된 요소가 드롭다운 바나 드롭다운 메뉴 바깥에 있고, 드롭다운이 열려있다면 드롭다운 닫기
  if (!isClickedInsideDropDown && isDropDownOpen) {
    isDropDownOpen = false;
    document.querySelector(".dep2").style.display = "none";
  }
});
