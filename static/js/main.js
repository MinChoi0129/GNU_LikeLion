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

// let container = document.querySelector(".recruit_right");
// let animeImg = document.getElementsByClassName("course_img")[0];
// let overlay = document.getElementById("overlay");

// container.addEventListener("mouseenter", function () {
//   animeImg.style.filter = "blur(5px) brightness(30%)";
//   overlay.style.display = "block";
// });

// container.addEventListener("mouseleave", function () {
//   animeImg.style.filter = "none";
//   overlay.style.display = "none";
// });

// overlay.addEventListener("click", function () {
//   window.open("https://www.youtube.com/watch?v=R0YJ-r-qLNE", "_blank");
// });




// window.requestAnimFrame = (function () {
//   return (
//     window.requestAnimationFrame ||
//     window.webkitRequestAnimationFrame ||
//     window.mozRequestAnimationFrame ||
//     window.oRequestAnimationFrame ||
//     window.msRequestAnimationFrame ||
//     function (callback) {
//       window.setTimeout(callback, 1000 / 60);
//     }
//   );
// })();

// const starfield = (function () {
//   let stars = [],
//     star_density = 25,
//     velocity = { x: 0, y: 0 },
//     star_colors = ["rgba(0,0,0,.5)", "#ffe9c4", "#d4fbff"],
//     star_canvas,
//     star_context,
//     viewport_width,
//     viewport_height,
//     // 마우스 드래그 관련 변수
//     isDragging = false,
//     lastMouseX,
//     lastMouseY;

//   function initialize() {
//     // 캔버스 생성
//     star_canvas = document.createElement("canvas");
//     star_context = star_canvas.getContext("2d");

//     // 뷰포트 크기 가져오고 캔버스 크기 조정
//     resize_canvas();

//     // 모든 별 그리기, 별은 10 단위로 나타납니다
//     for (let i = 0; i < star_density * 10; i++) {
//       let rad = Math.random() * 2;
//       create_star(rad);
//       // 큰 별보다 작은 별을 두 배로 생성합니다.
//       rad = Math.random();
//       create_star(rad);
//       create_star(rad);
//     }

//     // 캔버스를 페이지에 추가
//     document.body.appendChild(star_canvas);

//     // 키를 누르면 무언가 일어납니다
//     document.addEventListener(
//       "keydown",
//       function (e) {
//         e = e || window.event;
//         // 기존 속도에 추가하여 속도 변화를 억제하고 방향 변경이 현실적으로 부드럽게 이루어지도록 만듭니다.
//         if (e.keyCode == 39) {
//           velocity = {
//             x: velocity.x - 5,
//             y: velocity.y,
//           };
//         }
//         if (e.keyCode == 37) {
//           velocity = {
//             x: velocity.x + 5,
//             y: velocity.y,
//           };
//         }
//         if (e.keyCode == 40) {
//           velocity = {
//             x: velocity.x,
//             y: velocity.y - 5,
//           };
//         }
//         if (e.keyCode == 38) {
//           velocity = {
//             x: velocity.x,
//             y: velocity.y + 5,
//           };
//         }
//       },
//       false
//     );

//     // 마우스 드래그 관련 이벤트 리스너 등록
//     star_canvas.addEventListener("mousedown", function (e) {
//       isDragging = true;
//       lastMouseX = e.clientX;
//       lastMouseY = e.clientY;
//     });

//     star_canvas.addEventListener("mousemove", function (e) {
//       if (isDragging) {
//         let mouseX = e.clientX;
//         let mouseY = e.clientY;
//         velocity = {
//           x: velocity.x + (mouseX - lastMouseX) / 10,
//           y: velocity.y + (mouseY - lastMouseY) / 10,
//         };
//         lastMouseX = mouseX;
//         lastMouseY = mouseY;
//       }
//     });

//     star_canvas.addEventListener("mouseup", function () {
//       isDragging = false;
//     });

//     // 마우스 스크롤 이벤트를 처리합니다.
//     document.addEventListener(
//       "mousewheel",
//       function (e) {
//         e = e || window.event;
//         // 마우스 휠 방향에 따라 속도를 조절합니다.
//         if (e.deltaY > 0) {
//           velocity = {
//             x: velocity.x,
//             y: velocity.y - 5,
//           };
//         } else {
//           velocity = {
//             x: velocity.x,
//             y: velocity.y + 5,
//           };
//         }
//       },
//       false
//     );


//     // 첫 프레임을 그리는 것은 그리기 루프를 시작합니다
//     draw_frame();

//     function clear_canvas() {
//       // 매 프레임마다 캔버스에 반투명한 검은색을 그려서 이동 중인 별 뒤에 흔적 효과를 제공합니다.

//       // star_context.fillRect(0, 0, viewport_width, viewport_height);
//       star_context.globalCompositeOperation = "source-over"; // 이전 프레임을 그립니다.
//       star_context.fillStyle = "rgba(0, 0, 0, 0.3)"; // 흔적의 색상 및 투명도 조절
//       star_context.fillRect(0, 0, viewport_width, viewport_height);
//       star_context.globalCompositeOperation = "lighter"; // 새로운 별을 그릴 때 사용할 별 모드
//     }

//     function draw_star() {
//       let s = stars.length;
//       // 각 별에 대해
//       while (s--) {
//         let star = stars[s];
//         // 개별 별의 위치 업데이트
//         star.update();
//         // 별을 캔버스에 렌더링
//         star.render(star_context);
//       }
//     }

//     function create_star(rad) {
//       // create_star 함수는 실제로 필요하지는 않지만 코드를 읽기 좋게 만들고 확장하기 쉽도록 도움이 됩니다.
//       stars.push(new star(rad));
//     }

//     function draw_frame() {
//       clear_canvas();
//       // 무한 루프!
//       frame = requestAnimFrame(draw_frame);
//       draw_star();

//       document.addEventListener('DOMContentLoaded', function () {
//         // body 요소 가져오기
//         var bodyElement = document.body;

//         // 캔버스를 배경으로 설정
//         bodyElement.style.background = 'url(' + star_canvas.toDataURL() + ') no-repeat fixed';
//         bodyElement.style.backgroundSize = 'cover';
//     });
//     }
//   }

//   function resize_canvas() {
//     viewport_width = window.innerWidth;
//     viewport_height = window.innerHeight;
//     star_canvas.width = viewport_width;
//     star_canvas.height = viewport_height;
//   }

//   const star = function (rad) {
//     this.alpha = Math.round(Math.random() * 100 - 70 + 70); // 무작위 밝기
//     this.radius = rad || Math.random() * 2; // 반지름
//     this.color = star_colors[Math.round(Math.random() * star_colors.length)]; // 배열에서 무작위 색상 선택

//     this.pos = {
//       // 초기 무작위 위치
//       x: Math.random() * viewport_width,
//       y: Math.random() * viewport_height,
//     };
//   };

//   star.prototype = {
//     update: function () {
//       // 반지름에 따라 별이 다른 속도로 움직입니다 (더 깊이 있는 것은 더 느리게 움직임)
//       // 네, 3은 마법의 숫자입니다 :)
//       this.pos.y +=
//         velocity.y === 0 ? velocity.y : velocity.y / (3 - this.radius);
//       this.pos.x +=
//         velocity.x === 0 ? velocity.x : velocity.x / (3 - this.radius);

//       // 별을 캔버스 안에 유지
//       if (this.pos.y > viewport_height) {
//         this.pos.y = 0;
//       } else if (this.pos.y < 0) {
//         this.pos.y = viewport_height;
//       }
//       // 다른 방향으로 별을 캔버스 안에 유지
//       if (this.pos.x > viewport_width) {
//         this.pos.x = 0;
//       } else if (this.pos.x < 0) {
//         this.pos.x = viewport_width;
//       }
//       // 속도를 감소시켜 이동을 중지하면 느려집니다.
//       velocity.x = velocity.x / 1.00005;
//       velocity.y = velocity.y / 1.00005;
//     },

//     render: function (context) {
//       // 현재 위치에 별을 그립니다.
//       let x = Math.round(this.pos.x),
//         y = Math.round(this.pos.y);

//       context.save();
//       context.globalComposite;
//       context.globalCompositeOperation = "lighter";
//       context.globalAlpha = this.alpha;
//       context.fillStyle = this.color;
//       context.beginPath();
//       context.moveTo(x, y);
//       context.arc(x, y, this.radius, 0, Math.PI * 2, true);
//       context.closePath();
//       context.fill();
//       context.restore();
//     },
//   };

//   return {
//     // 항상 멋진 함수 이름으로 시작하세요!
//     lets_roll: initialize,
//   };
// })();

// starfield.lets_roll();
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
