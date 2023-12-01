// -------------------------------------- 2페이지 moveBtn 관련 --------------------------------------
// RestApiData.js 파일을 가져오기
import { getProjectDataById } from "./restApiData.js";

class Project {
	constructor() {
		this.currentIndex = 0; // 현재 이미지 인덱스를 저장하는 변수 추가
		this.currentIndex2 = 0; // 현재 이미지 인덱스를 저장하는 변수 추가
		this.oldChildAccount;

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
				console.error("에러 발생:", error);
			}
		}

		// 좌우버튼 클릭시에만 setupImageSlider()를 호출
		document.getElementById("leftBtn").addEventListener("click", () => {
			this.setupImageSlider(-1);
		});

		// 우측버튼 클릭 이벤트 설정
		document.getElementById("rightBtn").addEventListener("click", () => {
			this.setupImageSlider(1);
		});

		this.setupImages(this.projectMainImageList, this.projectIndexList);
		this.setupImageSlider();

		// 좌우버튼 클릭시에만 setupImageSlider2()를 호출
		document.getElementById("leftBtn2").addEventListener("click", () => {
			this.setupImageSlider2(-1);
		});

		// 우측버튼 클릭 이벤트 설정
		document.getElementById("rightBtn2").addEventListener("click", () => {
			this.setupImageSlider2(1);
		});

		this.setupImages2(this.projectMainImageList, this.projectIndexList);
		this.setupImageSlider2();
	}

	// 이미지 슬라이더를 초기화하는 함수
	setupImages(imgList) {
		const imgListIdeathon = imgList.slice(0, 3);
		const dtimgBox = document.querySelector(".dtimgBox");

		// 맨 처음에 # 이미지 추가
		const hashItem = document.createElement("div");
		hashItem.classList.add("item", "empty");
		dtimgBox.appendChild(hashItem);

		imgListIdeathon.forEach((imgSrc, index) => {
			const item = document.createElement("div");
			item.classList.add("item");
			item.setAttribute("data-index", index + 1);

			const imgElement = document.createElement("img");
			imgElement.src = imgSrc;

			if (index === 0) {
				// 1번째 인덱스에는 이미지 0번째 인덱스의 이미지 추가
				imgElement.src = imgListIdeathon[0];
			}

			item.appendChild(imgElement);
			dtimgBox.appendChild(item);
		});

	}

	// 이미지를 보여주는 함수
	showImage(index) {
		const dtimgBox = document.querySelector(".dtimgBox");
		const itemWidth = document.querySelector(".item").offsetWidth;
		const newPosition = -itemWidth * index;
		dtimgBox.style.transition = "transform 0.5s ease";
		dtimgBox.style.transform = `translateX(${newPosition}px)`;

		const items = document.querySelectorAll(".item");

		items.forEach((item) => {
			let dataIndex = parseInt(item.getAttribute("data-index"));

			if (dataIndex === index || dataIndex === index + 2) {
				// 맨 왼쪽과 맨 오른쪽에만 opacity 적용
				item.style.opacity = 0.55;
			} else if (dataIndex === index + 1) {
				item.style.opacity = 1;
			} else {
				item.style.opacity = 0;
			}

			// 나머지 스타일은 여기에 추가
			if (dataIndex === index) {
				item.style.transform = "scale(0.65) translateX(20vw)";
				item.style.zIndex = "-999";
			} else if (dataIndex === index + 1) {
				item.style.transform = "scale(0.9)";
				item.style.zIndex = "999";
			} else if (dataIndex === index + 2) {
				item.style.transform = "scale(0.65) translateX(-20vw)";
				item.style.zIndex = "-999";
			} else if (index === 0 && dataIndex === items.length - 2) {
				item.style.transform = "scale(0.65)";
				item.style.zIndex = "-999";
			} else {
				item.style.transform = "scale(0.65)";
				item.style.display = "block";
			}
		});

		// 현재 인덱스 업데이트
		this.currentIndex = index;
	}

	setupImageSlider(direction) {
		const items = document.querySelectorAll(".item");

		if (direction === -1) {
			this.currentIndex =
				(this.currentIndex - 1 + items.length - 1) % (items.length - 1);
		} else if (direction === 1) {
			this.currentIndex = (this.currentIndex + 1) % (items.length - 1);
		}

		this.showImage(this.currentIndex);
		this.initializeDescription(this.currentIndex, this.projectIndexList);
	}

	// 이미지 설명 초기화하는 함수
	initializeDescription(index, indexList) {
		const explanation = document.querySelector(".explanation");
		const indexListIdeathon = indexList.slice(0, 3);

		
		const itemAccount = document.createElement("div");
		const itemName = document.createElement("div");
		const itemView = document.createElement("div");
		const itemA = document.createElement("a");
		const itemImg = document.createElement("img");

		const currentUrl = window.location.href + indexListIdeathon[index];
		const staticURL = "/static/image/more.png"; // 정적 파일의 실제 경로로 수정

		itemAccount.classList.add('account');
		itemAccount.innerHTML = `${this.projectExplainList[index]}`;
		itemName.classList.add('name');
		itemName.innerHTML = `${this.projectTitleList[index]}`;
		itemView.classList.add('view');
		itemA.setAttribute('href', currentUrl);
		itemA.innerHTML = `VIEW MORE`;
		itemImg.classList.add('more');
		itemImg.setAttribute('src', staticURL);

		itemA.appendChild(itemImg);
		itemView.appendChild(itemA);
		itemAccount.appendChild(itemName);
		itemAccount.appendChild(itemView);

		explanation.replaceChildren(itemAccount);
	}

	// 이미지 슬라이더를 초기화하는 함수
	setupImages2(imgList) {
		const imgListHackathon = imgList.slice(3, 6);
		const dtimgBox2 = document.querySelector(".dtimgBox2");

		// 맨 처음에 # 이미지 추가
		const hashItem2 = document.createElement("div");
		hashItem2.classList.add("item2", "empty");
		dtimgBox2.appendChild(hashItem2);

		imgListHackathon.forEach((imgSrc, index) => {
			const item2 = document.createElement("div");
			item2.classList.add("item2");
			item2.setAttribute("data-index", index + 1);

			const imgElement = document.createElement("img");
			imgElement.src = imgSrc;

			if (index === 0) {
				// 1번째 인덱스에는 이미지 0번째 인덱스의 이미지 추가
				imgElement.src = imgListHackathon[0];
			}

			item2.appendChild(imgElement);
			dtimgBox2.appendChild(item2);
		});

	}

	showImage2(index) {
		const dtimgBox2 = document.querySelector(".dtimgBox2");
		const itemWidth2 = document.querySelector(".item2").offsetWidth;
		const newPosition2 = -itemWidth2 * index;
		dtimgBox2.style.transition = "transform 0.5s ease";
		dtimgBox2.style.transform = `translateX(${newPosition2}px)`;

		const item2 = document.querySelectorAll(".item2");

		item2.forEach((item2) => {
			let dataIndex = parseInt(item2.getAttribute("data-index"));

			if (dataIndex === index || dataIndex === index + 2) {
				// 맨 왼쪽과 맨 오른쪽에만 opacity 적용
				item2.style.opacity = 0.55;
			} else if (dataIndex === index + 1) {
				item2.style.opacity = 1;
			} else {
				item2.style.opacity = 0;
			}

			// 나머지 스타일은 여기에 추가
			if (dataIndex === index) {
				item2.style.transform = "scale(0.65) translateX(20vw)";
				item2.style.zIndex = "-999";
			} else if (dataIndex === index + 1) {
				item2.style.transform = "scale(0.9)";
				item2.style.zIndex = "999";
			} else if (dataIndex === index + 2) {
				item2.style.transform = "scale(0.65) translateX(-20vw)";
				item2.style.zIndex = "-999";
			} else if (index === 0 && dataIndex === item2.length - 2) {
				item2.style.transform = "scale(0.65)";
				item2.style.zIndex = "-999";
			} else {
				item2.style.transform = "scale(0.65)";
				item2.style.display = "block";
			}
		});

		// 현재 인덱스 업데이트
		this.currentIndex2 = index;
	}

	setupImageSlider2(direction) {
		const items2 = document.querySelectorAll(".item2");

		if (direction === -1) {
			this.currentIndex2 =
				(this.currentIndex2 - 1 + items2.length - 1) % (items2.length - 1);
		} else if (direction === 1) {
			this.currentIndex2 = (this.currentIndex2 + 1) % (items2.length - 1);
		}

		this.showImage2(this.currentIndex2);
		this.initializeDescription2(this.currentIndex2, this.projectIndexList);
	}

	// 이미지 설명 초기화하는 함수
	initializeDescription2(index, indexList) {
		index = index+3;
		const explanation2 = document.querySelector(".explanation2");
		const indexListHackathon = indexList.slice(3, 6);

		
		const itemAccount2 = document.createElement("div");
		const itemName2 = document.createElement("div");
		const itemView2 = document.createElement("div");
		const itemA2 = document.createElement("a");
		const itemImg2 = document.createElement("img");

		const currentUrl2 = window.location.href + indexListHackathon[index-3];
		const staticURL = "/static/image/more.png"; // 정적 파일의 실제 경로로 수정

		itemAccount2.classList.add('account2');
		itemAccount2.innerHTML = `${this.projectExplainList[index]}`;
		itemName2.classList.add('name2');
		itemName2.innerHTML = `${this.projectTitleList[index]}`;
		itemView2.classList.add('view2');
		itemA2.setAttribute('href', currentUrl2);
		itemA2.innerHTML = `VIEW MORE`;
		itemImg2.classList.add('more2');
		itemImg2.setAttribute('src', staticURL);

		itemA2.appendChild(itemImg2);
		itemView2.appendChild(itemA2);
		itemAccount2.appendChild(itemName2);
		itemAccount2.appendChild(itemView2);

		explanation2.replaceChildren(itemAccount2);
	}

}

window.onload = () => {
	new Project();
};
