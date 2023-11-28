let topics = [
  {
    title: "백엔드",
    engTitle: "Backend",
    imgSrc: "./static/image/exImg1.png",
    description:
      "백엔드는 서버 측 개발을 담당하며, 데이터 처리와 로직을 구현합니다. 신속하고 정확한 서버를 구축하여 웹 어플리케이션을 지원합니다.",
    youtubeLink: "https://www.youtube.com/watch?v=your_backend_video_id",
  },
  {
    title: "프론트엔드",
    engTitle: "Frontend",
    imgSrc: "./static/image/exImg2.png",
    description:
      "프론트엔드는 사용자와 상호작용하며, 웹 디자인과 사용자 경험을 구현합니다. HTML, CSS, JavaScript를 활용하여 웹페이지를 개발합니다.",
    youtubeLink: "https://www.youtube.com/watch?v=your_frontend_video_id",
  },
  {
    title: "웹이란?",
    engTitle: "What is Web?",
    imgSrc: "./static/image/exImg3.png",
    description:
      "웹은 정보를 전달하고 공유하는 수단으로, 전 세계적으로 연결된 컴퓨터 네트워크를 기반으로 합니다. 다양한 리소스에 접근 가능합니다.",
    youtubeLink: "https://www.youtube.com/watch?v=your_web_video_id",
  },
  {
    title: "웹의 구조",
    engTitle: "Structure of Web",
    imgSrc: "./static/image/exImg4.png",
    description:
      "웹의 구조는 클라이언트와 서버 간의 통신을 기반으로 합니다. 웹 브라우저, 서버, 데이터베이스 등이 상호작용하여 동작합니다.",
    youtubeLink: "https://www.youtube.com/watch?v=your_web_structure_video_id",
  },
  {
    title: "협업",
    engTitle: "Collaboration",
    imgSrc: "./static/image/hakathon1.png",
    description:
      "협업은 팀원 간의 소통과 협력을 강조하는 과정입니다. GitHub를 통한 협업은 프로젝트의 효율성을 높이는 데 중요한 역할을 합니다.",
    youtubeLink: "https://www.youtube.com/watch?v=your_collaboration_video_id",
  },
  {
    title: "디자인",
    engTitle: "Design",
    imgSrc: "./static/image/hakathon2.png",
    description:
      "디자인은 사용자 경험을 개선하고 시각적인 아름다움을 제공합니다. Figma와 같은 도구를 활용하여 디자인을 구현합니다.",
    youtubeLink: "https://www.youtube.com/watch?v=your_design_video_id",
  },
];

let currentIndex = 0;
let intervalId;

function updateContent() {
  let currentTopic = topics[currentIndex];

  // Update content
  document.querySelector("#course_kor").textContent = currentTopic.title;
  document.querySelector("#course_eng").textContent = currentTopic.engTitle;
  document.querySelector(".course_img").src = currentTopic.imgSrc;
  document.querySelector("#course_explain").innerHTML =
    currentTopic.description;

  // Update YouTube link
  let youtubeLink = currentTopic.youtubeLink || "https://www.youtube.com/";
  document.getElementById("overlay").addEventListener("click", function () {
    window.open(youtubeLink, "_blank");
  });

  // Update slider
  let sliderItems = document.querySelectorAll(".slider_item");
  sliderItems.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.add("slider_active");
    } else {
      item.classList.remove("slider_active");
    }

    // Add click event to each slider item
    item.addEventListener("click", function () {
      currentIndex = index;
      updateContent();
    });
  });
}

function startAnimation() {
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % topics.length;
    updateContent();
  }, 3000);
}

// Initial content update
updateContent();

// Add event listeners for hover effect and stop animation on hover
let container = document.querySelector(".recruit_right");
let animeImg = document.querySelector(".course_img");
let overlay = document.getElementById("overlay");

container.addEventListener("mouseenter", function () {
  animeImg.style.filter = "blur(5px) brightness(30%)";
  overlay.style.display = "block";
  clearInterval(intervalId);
});

container.addEventListener("mouseleave", function () {
  animeImg.style.filter = "none";
  overlay.style.display = "none";
  startAnimation();
});

overlay.addEventListener("click", function () {
  window.open("https://www.youtube.com/watch?v=R0YJ-r-qLNE", "_blank");
});

// Start the animation
startAnimation();

document.getElementById("preBtn").addEventListener("click", function () {
  const intro = document.getElementById("intro");
  const slideWidth = document.querySelector(".slideBox").offsetWidth;
  intro.scrollBy({
    top: 0,
    left: -slideWidth,
    behavior: "smooth",
  });
});

document.getElementById("nextBtn").addEventListener("click", function () {
  const intro = document.getElementById("intro");
  const slideWidth = document.querySelector(".slideBox").offsetWidth;
  intro.scrollBy({
    top: 0,
    left: slideWidth,
    behavior: "smooth",
  });
});
