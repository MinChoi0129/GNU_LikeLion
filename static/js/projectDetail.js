document.addEventListener("DOMContentLoaded", function () {
  var imageList = [
    "../static/image/exImg1.png",
    "../static/image/exImg2.png",
    "../static/image/exImg3.png",
    "../static/image/exImg4.png",
  ];


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
    star_density = 25,
    velocity = { x: 0, y: 0 },
    star_colors = ["rgba(0,0,0,.5)", "#ffe9c4", "#d4fbff"],
    star_canvas,
    star_context,
    viewport_width,
    viewport_height,
    // 마우스 드래그 관련 변수
    isDragging = false,
    lastMouseX,
    lastMouseY;

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
    document.body.appendChild(star_canvas);

    // 키를 누르면 무언가 일어납니다
    document.addEventListener(
      "keydown",
      function (e) {
        e = e || window.event;
        // 기존 속도에 추가하여 속도 변화를 억제하고 방향 변경이 현실적으로 부드럽게 이루어지도록 만듭니다.
        if (e.keyCode == 39) {
          velocity = {
            x: velocity.x - 5,
            y: velocity.y,
          };
        }
        if (e.keyCode == 37) {
          velocity = {
            x: velocity.x + 5,
            y: velocity.y,
          };
        }
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
      },
      false
    );

    // 마우스 드래그 관련 이벤트 리스너 등록
    star_canvas.addEventListener("mousedown", function (e) {
      isDragging = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    });

    star_canvas.addEventListener("mousemove", function (e) {
      if (isDragging) {
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        velocity = {
          x: velocity.x + (mouseX - lastMouseX) / 10,
          y: velocity.y + (mouseY - lastMouseY) / 10,
        };
        lastMouseX = mouseX;
        lastMouseY = mouseY;
      }
    });

    star_canvas.addEventListener("mouseup", function () {
      isDragging = false;
    });

    // 마우스 스크롤 이벤트를 처리합니다.
    document.addEventListener(
      "mousewheel",
      function (e) {
        e = e || window.event;
        // 마우스 휠 방향에 따라 속도를 조절합니다.
        if (e.deltaY > 0) {
          velocity = {
            x: velocity.x,
            y: velocity.y - 5,
          };
        } else {
          velocity = {
            x: velocity.x,
            y: velocity.y + 5,
          };
        }
      },
      false
    );

    // 첫 프레임을 그리는 것은 그리기 루프를 시작합니다
    draw_frame();

    function clear_canvas() {
      // 매 프레임마다 캔버스에 반투명한 검은색을 그려서 이동 중인 별 뒤에 흔적 효과를 제공합니다.

      // star_context.fillRect(0, 0, viewport_width, viewport_height);
      star_context.globalCompositeOperation = "source-over"; // 이전 프레임을 그립니다.
      star_context.fillStyle = "rgba(0, 0, 0, 0.3)"; // 흔적의 색상 및 투명도 조절
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
      frame = requestAnimFrame(draw_frame);
      draw_star();
    }
  }

  function resize_canvas() {
    viewport_width = window.innerWidth;
    viewport_height = window.innerHeight;
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

});
