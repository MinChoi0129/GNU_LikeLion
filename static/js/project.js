// -------------------------------------- 2페이지 moveBtn 관련 --------------------------------------
// RestApiData.js 파일을 가져오기
import { getProjectDataById } from './restApiData.js';

class Project {
	constructor() {
		this.projectIndexList = [];
		this.projectGenerationList = []; // 기수
		this.projectSubjectList = []; // 주제(아이디어톤 or 해커톤)
		this.projectTitleList = []; // 프로젝트 제목
		this.projectExplainList = []; // 프로젝트 설명
		this.projectMainImageList = []; // 카드뉴스 첫 이미지

		this.init();
	}

	async init() {
		const projectIdList = [3, 4, 5, 6, 7, 8, 9, 10]; // 원하는 프로젝트의 ID로 설정
		for (let i = 0; i < projectIdList.length; i++) {
			try {
				const data = await getProjectDataById(projectIdList[i]);
				this.projectIndexList.push(String(data.id));
				this.projectGenerationList.push(data.generation);
				this.projectSubjectList.push(data.subject);
				this.projectTitleList.push(data.title);
				this.projectExplainList.push(data.explain);
				this.projectMainImageList.push(data.images[0].image);
			} catch (error) {
				console.error('에러 발생:', error);
			}
		}

		this.initializeSlider(this.projectMainImageList);
		this.initializeDescription();
	}


	// 이미지 슬라이더를 초기화하는 함수
	initializeSlider(imgList) {
		let index = 0;
		const lastImgNum = imgList.length;
		// const items = document.querySelectorAll(".item");

		const dtimgBox = document.querySelector(".dtimgBox");
		for(let i; i < 3; i++) {
			
		}
		
		const createItem = document.createElement('div');
		const createImg = document.createElement('img', imgList[index]);
		
		createItem.classList.add('item');
		createItem.setAttribute('data-index', index);
		createImg.setAttribute('src', imgList[index]) 
		createItem.appendChild(createImg);
		dtimgBox.appendChild(createItem);
		console.log(imgList);
		

		// 좌측버튼 클릭 이벤트 설정
		document.getElementById("leftBtn").addEventListener("click", function () {
			index = (index - 1 + lastImgNum) % lastImgNum;
			showImage(index);
		});

		// 우측버튼 클릭 이벤트 설정
		document.getElementById("rightBtn").addEventListener("click", function () {
			index = (index + 1) % lastImgNum;
			showImage(index);
		});

		// 초기화 함수 호출
		showImage(index);
	}

	// 이미지를 보여주는 함수
	showImage(index ) {

		const itemWidth = document.querySelector(".item").offsetWidth;
		const newPosition = -itemWidth * index;
		dtimgBox.style.transition = "transform 0.5s ease";
		dtimgBox.style.transform = `translateX(${newPosition}px)`;

		// 각 이미지에 대한 스타일 변경
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
				item.style.display = "none";
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


	// 이미지 설명과 연도를 초기화하는 함수
	initializeDescription() {
		let currentYear = "11th";
		let currentIndex = 0;

		const images = {
			"11th" : [
				this.projectMainImageList[0],
				this.projectMainImageList[1],
				this.projectMainImageList[2]
			]
		}

		const imageDescriptions = {
			"11th" : [
				{ account : this.projectExplainList[0], name : this.projectTitleList[0] },
				{ account : this.projectExplainList[1], name : this.projectTitleList[1] },
				{ account : this.projectExplainList[2], name : this.projectTitleList[2] }
			]
		}

		const staticURL = "/static/image/more.png"; // 정적 파일의 실제 경로로 수정
		


		// 선택된 연도에 따라 이미지와 설명을 업데이트하는 함수
		function changeYear(year) {
			// 업데이트 current year
			currentYear = year;

			// 드롭다운에 표시된 연도를 업데이트
			document.getElementById("currentYear").innerText = year;

			// 업데이트 images
			const imgElements = document.querySelectorAll(".dtimgBox .item img");
			for (let i = 0; i < imgElements.length; i++) {
				imgElements[i].src = images[year][i];
			}

			// 업데이트 description
			changeDescription(currentIndex);
		}

		// 선택된 이미지 인덱스에 따라 설명을 업데이트하는 함수
		function changeDescription(index) {
			const descriptionElement = document.querySelector(".explanation");
			const currentDescription = imageDescriptions[currentYear][index];
			const currentUrl = window.location.href +
							 	"/" + 
								(this.projectIndexList[index] ? this.projectIndexList[index].toString() : "");
			console.log("현재 주소", currentUrl);


			descriptionElement.innerHTML = `
				<div class="account">
					${currentDescription.account}
					<div class="name">${currentDescription.name}</div>
					<a class="viewProjectDetail" href="${currentUrl}">
					<div class="view">
						VIEW MORE 
						<img class="more" src="${staticURL}" />
					</div>
					</a>
				</div>`;
		}

		// 연도 선택 드롭다운 변경 이벤트 설정
		const yearDropdown = document.getElementById("currentYear");

		yearDropdown.addEventListener("change", function () {
			// 드롭다운에서 선택한 연도를 가져옵니다.
			const selectedYear = yearDropdown.value;

			// 업데이트 images
			const imgElements = document.querySelectorAll(".dtimgBox .item img");
			for (let i = 0; i < imgElements.length; i++) {
				imgElements[i].src = images[selectedYear][i];
			}

			// 초기화 currentIndex to 0
			currentIndex = 0;

			// 첫 번째 이미지에 대한 설명 업데이트
			changeDescription(currentIndex);
		});

		// 좌측 및 우측 버튼 클릭 이벤트 설정
		document.getElementById("leftBtn").addEventListener("click", function () {
			// 현재 인덱스 감소(첫 번째 이미지인 경우 마지막 이미지로 다시 반복)
			currentIndex =
				(currentIndex - 1 + images[currentYear].length) %
				images[currentYear].length;
			changeDescription(currentIndex);
		});

		document.getElementById("rightBtn").addEventListener("click", function () {
			// 현재 인덱스 증가(마지막 이미지인 경우 첫 번째 이미지로 다시 반복)
			currentIndex = (currentIndex + 1) % images[currentYear].length;
			changeDescription(currentIndex);
		});

		// 초기 이미지 설명 업데이트
		changeDescription(currentIndex);
	}
	
	
}

window.onload = ()=>{
    new Project();
}