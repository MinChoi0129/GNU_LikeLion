// -------------------------------------- 1페이지 다운화살표 --------------------------------------
function downPage() {
	// 위치 계산
	const windowHeight = window.innerHeight;
	const destination = windowHeight;

	// 부드러운 스크롤
	window.scrollTo({
	  top: destination,
	  behavior: 'smooth'
	});
}
// -------------------------------------- 2페이지 moveBtn 관련 --------------------------------------
// DOMContentLoaded 이벤트가 발생하면 실행되는 함수
document.addEventListener("DOMContentLoaded", function () {
	// 이미지 리스트 정의
	const imageList = [
		"../static/image/ideathon4.png",
		"../static/image/ideathon5.png",
		"../static/image/ideathon6.png"
	];

	// 현재 이미지의 인덱스
	let currentIndex = 0;

	// 이미지 컨테이너와 슬라이더 컨테이너 가져오기
	const imageContainers = document.querySelectorAll(".secondPage .eximg img");
	const accountElement = document.querySelector(".secondPage .account");
	const nameElement = document.querySelector(".secondPage .name");

	// 이미지 상태 업데이트 함수
	function updateImageState() {
		// 가운데 이미지 업데이트
		imageContainers[1].src = imageList[currentIndex];
		imageContainers[1].classList.remove("noFirstViewImg");
		imageContainers[1].classList.remove("noLastViewImg");

		// 이전, 다음 이미지의 인덱스 계산
		const prevIndex = (currentIndex - 1 + imageList.length) % imageList.length;
		const nextIndex = (currentIndex + 1) % imageList.length;

		// 양 옆 이미지 업데이트
		imageContainers[0].src = imageList[prevIndex];
		imageContainers[2].src = imageList[nextIndex];

		// 첫 번째 이미지일 때 클래스 추가
		if (currentIndex === 0) {
			imageContainers[0].classList.add("noFirstViewImg");
		} else {
			imageContainers[0].classList.remove("noFirstViewImg");
		}

		// 마지막 이미지일 때 클래스 추가
		if (currentIndex === imageList.length - 1) {
			imageContainers[2].classList.add("noLastViewImg");
		} else {
			imageContainers[2].classList.remove("noLastViewImg");
		}
		// 텍스트 콘텐츠 업데이트
		updateTextContent();
	}
	
	//화면 바뀔 때 텍스트 바뀌는 거
	function updateTextContent() {
		const textContentList = [
			{ account: "더 나은 건강, 더 행복한 삶", name: "RE : BORN" },
			{ account: "필요한 약을 클릭 한번으로", name: "PHAMPHAM" },
			{ account: "도대체 가능한 날이 언제야", name: "이때 어때" },
		];
	
		accountElement.textContent = textContentList[currentIndex].account;
		nameElement.textContent = textContentList[currentIndex].name;
	}


	// 초기 이미지 상태 설정
	updateImageState();

	// 오른쪽 버튼 클릭 이벤트
	const rightButton = document.querySelector(".fa-circle-chevron-right");
	rightButton.addEventListener("click", function () {
		currentIndex = (currentIndex + 1) % imageList.length;
		updateImageState(); // 0.5초 후에 이미지 업데이트
	});

	// 왼쪽 버튼 클릭 이벤트
	const leftButton = document.querySelector(".fa-circle-chevron-left");
	leftButton.addEventListener("click", function () {
		currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
		updateImageState();// 0.5초 후에 이미지 업데이트
	});
});

// -------------------------------------- 3페이지 moveBtn 관련 --------------------------------------
document.addEventListener("DOMContentLoaded", function () {
	const imageLists = {
		'10': ["../static/image/hakathon1.png", "../static/image/hakathon2.png"],
		'11': ["../static/image/hakathon3.png", "../static/image/hakathon4.png", "../static/image/hakathon5.png"]
	};

	const descriptionLists = {
		'10': [
			{ account2: "누구나 손 쉽게 디자인", name2: "레터링 케이크 레시피" },
			{ account2: "Dream Sketch", name2: "당신의 경험" }
		],
		'11': [
			{ account2: "교사들을 위한 커뮤니티", name2: "아낌없이 주는 나무" },
			{ account2: "수어 학습의 시작", name2: "핸디" },
			{ account2: "우리와 함께 나만의 모빌리티", name2: "WHEEL WE GO" }
		]
	};

	// 초기 이미지 상태 설정
	let currentIndex2 = 0;
	let selectedYear = '11'; // 초기 선택된 년도

	// DOM 요소 가져오기
	const imageContainers2 = document.querySelectorAll(".thirdPage .eximg2 img");
	const accountElement2 = document.querySelector(".thirdPage .account2");
	const nameElement2 = document.querySelector(".thirdPage .name2");
	const currentYearElement = document.getElementById('currentYear'); // 현재 년도 엘리먼트

	updateImageState(); // 초기 상태 설정

	// 10th, 11th 버튼 클릭 이벤트
	const yearButtons = document.querySelectorAll(".dep2Year");
	yearButtons.forEach(function (button) {
		button.addEventListener("click", function () {
			selectedYear = button.textContent.replace(/\D+/g, ''); // 클릭한 버튼의 텍스트에서 숫자만 추출
			currentIndex2 = 0; // 선택된 년도로 변경될 때 초기 인덱스 0으로 설정
			currentYearElement.textContent = selectedYear + "th."; // 현재 년도 업데이트
			updateImageState(); // 이미지와 설명 업데이트
		});
	});

	// 이미지 상태 업데이트 함수
	function updateImageState() {
		// 가운데 이미지 업데이트
		const currentImageList = imageLists[selectedYear];
		const currentDescriptionList = descriptionLists[selectedYear];

		imageContainers2[1].src = currentImageList[currentIndex2];
		imageContainers2[1].classList.remove("noFirstViewImg");
		imageContainers2[1].classList.remove("noLastViewImg");

		// 이전, 다음 이미지의 인덱스 계산
		const prevIndex2 = (currentIndex2 - 1 + currentImageList.length) % currentImageList.length;
		const nextIndex2 = (currentIndex2 + 1) % currentImageList.length;

		// 양 옆 이미지 업데이트
		imageContainers2[0].src = currentImageList[prevIndex2];
		imageContainers2[2].src = currentImageList[nextIndex2];

		// 첫 번째 이미지일 때 클래스 추가
		if (currentIndex2 === 0) {
			imageContainers2[0].classList.add("noFirstViewImg");
		} else {
			imageContainers2[0].classList.remove("noFirstViewImg");
		}

		// 마지막 이미지일 때 클래스 추가
		if (currentIndex2 === currentImageList.length - 1) {
			imageContainers2[2].classList.add("noLastViewImg");
		} else {
			imageContainers2[2].classList.remove("noLastViewImg");
		}

		// 설명 엘리먼트 업데이트
		accountElement2.textContent = currentDescriptionList[currentIndex2].account2;
		nameElement2.textContent = currentDescriptionList[currentIndex2].name2;
	}

	// .moveBtn2 내부에서 오른쪽 버튼 클릭 이벤트
	const moveBtn2 = document.querySelector(".moveBtn2");

	// 오른쪽 버튼 클릭 이벤트
	const rightButton = moveBtn2.querySelector(".fa-circle-chevron-right");
	rightButton.addEventListener("click", function () {
		currentIndex2 = (currentIndex2 + 1) % imageLists[selectedYear].length;
		updateImageState();
	});

	// 왼쪽 버튼 클릭 이벤트
	const leftButton = moveBtn2.querySelector(".fa-circle-chevron-left");
	leftButton.addEventListener("click", function () {
		currentIndex2 = (currentIndex2 - 1 + imageLists[selectedYear].length) % imageLists[selectedYear].length;
		updateImageState();
	});
});