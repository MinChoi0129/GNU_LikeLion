// requestAnimFrame()는 Mr Irish의 설명대로 작동합니다: http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
window.requestAnimFrame = (function () {
	return (
		window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (callback) {
			window.setTimeout(callback, 1000 / 60);
		}
	);
})();

const starfield = (function () {
	let stars = [],
		star_density = 50,
		velocity = { x: 0, y: 0 },
		star_colors = ["rgba(0,0,0,.5)", "#ffe9c4", "#d4fbff"],
		star_canvas,
		star_context,
		viewport_width,
		viewport_height;

	function initialize() {
		// 캔버스 생성
		star_canvas = document.createElement("canvas");
		star_context = star_canvas.getContext("2d");
	
		// 뷰포트 크기 가져오고 캔버스 크기 조정
		resize_canvas();
	
		// 모든 별 그리기, 별은 10 단위로 나타납니다
		for (let i = 0; i < star_density * 10; i++) {
			let rad = Math.random() * 2;
			create_star(rad);
			// 큰 별보다 작은 별을 두 배로 생성합니다.
			rad = Math.random();
			create_star(rad);
			create_star(rad);
		}
	
		// 캔버스를 페이지에 추가
		const backGround = document.querySelector(".backGround");
		backGround.appendChild(star_canvas);
	
		// 키를 누르면 무언가 일어납니다
		document.addEventListener("keydown",function (e) {
			e = e || window.event;
			// 기존 속도에 추가하여 속도 변화를 억제하고 방향 변경이 현실적으로 부드럽게 이루어지도록 만듭니다.
			if (e.keyCode == 40) {
				velocity = {
					x: velocity.x,
					y: velocity.y - 5,
				};
			}
			if (e.keyCode == 38) {
				velocity = {
					x: velocity.x,
					y: velocity.y + 5,
				};
			}
		},false);
	
		// 마우스 스크롤 이벤트를 처리합니다.
		document.addEventListener("mousewheel",function (e) {
			e = e || window.event;
			// 마우스 휠 방향에 따라 속도를 조절합니다.
			if (e.deltaY > 0) {
				velocity = {
					x: velocity.x,
					y: velocity.y - 1,
				};
			} else {
				velocity = {
					x: velocity.x,
					y: velocity.y + 1,
				};
			}
		},false);
	
		// 첫 프레임을 그리는 것은 그리기 루프를 시작합니다
		draw_frame();
	
		function clear_canvas() {
			// 매 프레임마다 캔버스에 반투명한 검은색을 그려서 이동 중인 별 뒤에 흔적 효과를 제공합니다.
	
			star_context.globalCompositeOperation = "source-over"; // 이전 프레임을 그립니다.
			star_context.fillStyle = "rgba(3, 32, 35, 0.3)"; // 흔적 및 배경의 색상 및 투명도 조절
			star_context.fillRect(0, 0, viewport_width, viewport_height);
			star_context.globalCompositeOperation = "lighter"; // 새로운 별을 그릴 때 사용할 별 모드
		}
	
		function draw_star() {
			let s = stars.length;
			// 각 별에 대해
			while (s--) {
				let star = stars[s];
				// 개별 별의 위치 업데이트
				star.update();
				// 별을 캔버스에 렌더링
				star.render(star_context);
			}
		}
	
		function create_star(rad) {
			// create_star 함수는 실제로 필요하지는 않지만 코드를 읽기 좋게 만들고 확장하기 쉽도록 도움이 됩니다.
			stars.push(new star(rad));
		}
	
		function draw_frame() {
			clear_canvas();
			// 무한 루프!

			// velocity 값을 이용하여 위치를 업데이트
			velocity.y = velocity.y - 0.1; // 위로 조금씩 움직이도록 수정

			frame = requestAnimFrame(draw_frame);
			draw_star();
		}
	}

	function resize_canvas() {
		viewport_width = window.innerWidth;
		viewport_height = window.innerHeight * 4;
		star_canvas.width = viewport_width;
		star_canvas.height = viewport_height;
	}

	const star = function (rad) {
		this.alpha = Math.round(Math.random() * 100 - 70 + 70); // 무작위 밝기
		this.radius = rad || Math.random() * 2; // 반지름
		this.color = star_colors[Math.round(Math.random() * star_colors.length)]; // 배열에서 무작위 색상 선택
	
		this.pos = {
			// 초기 무작위 위치
			x: Math.random() * viewport_width,
			y: Math.random() * viewport_height,
		};
	};

	star.prototype = {
		update: function () {
			// 반지름에 따라 별이 다른 속도로 움직입니다 (더 깊이 있는 것은 더 느리게 움직임)
			// 네, 3은 마법의 숫자입니다 :)
			this.pos.y +=
			velocity.y === 0 ? velocity.y : velocity.y / (3 - this.radius);
			this.pos.x +=
			velocity.x === 0 ? velocity.x : velocity.x / (3 - this.radius);
	
			// 별을 캔버스 안에 유지
			if (this.pos.y > viewport_height) {
				this.pos.y = 0;
			} else if (this.pos.y < 0) {
				this.pos.y = viewport_height;
			}
			// 다른 방향으로 별을 캔버스 안에 유지
			if (this.pos.x > viewport_width) {
				this.pos.x = 0;
			} else if (this.pos.x < 0) {
				this.pos.x = viewport_width;
			}
			// 속도를 감소시켜 이동을 중지하면 느려집니다.
			velocity.x = velocity.x / 1.00005;
			velocity.y = velocity.y / 1.00005;
		},
	
		render: function (context) {
			// 현재 위치에 별을 그립니다.
			let x = Math.round(this.pos.x),
			y = Math.round(this.pos.y);
	
			context.save();
			context.globalComposite;
			context.globalCompositeOperation = "lighter";
			context.globalAlpha = this.alpha;
			context.fillStyle = this.color;
			context.beginPath();
			context.moveTo(x, y);
			context.arc(x, y, this.radius, 0, Math.PI * 2, true);
			context.closePath();
			context.fill();
			context.restore();
		},
	};

	return {
		// 항상 멋진 함수 이름으로 시작하세요!
		lets_roll: initialize,
	};
})();

starfield.lets_roll();


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