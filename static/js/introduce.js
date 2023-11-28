// window.onload = function () {
//     var canvas = document.getElementById('canvas');
//     var canvas2 = document.getElementById('canvas2');
//     var canvas3 = document.getElementById('canvas3');
//     var canvas4 = document.getElementById('canvas4');
//     var canvas5 = document.getElementById('canvas5');
//     var canvas6 = document.getElementById('canvas6');

//     if (canvas.getContext && canvas2.getContext) {
//         var context = canvas.getContext('2d');
//         var context2 = canvas2.getContext('2d');
//         var context3 = canvas3.getContext('2d');
//         var context4 = canvas4.getContext('2d');
//         var context5 = canvas5.getContext('2d');
//         var context6 = canvas6.getContext('2d');

//         // 첫 번째 캔버스
//         context.beginPath();
//         context.moveTo(-250, 100);
//         context.bezierCurveTo(300, -100, 40, 500, 750, 500);
//         context.lineWidth = 1;
//         context.strokeStyle = "#0099D9";
//         context.stroke();

//         // 두 번째 캔버스
//         context2.beginPath();
//         context2.moveTo(200, 0);
//         context2.bezierCurveTo(650, -100, 250, 300, 131, 0);
//         context2.lineWidth = 1;
//         context2.strokeStyle = "#0099D9";
//         context2.stroke();

//         // 세 번째 캔버스
//         context3.beginPath();
//         context3.moveTo(0, 0);
//         context3.bezierCurveTo(200, -140, 70, 240, -200, 0);
//         context3.lineWidth = 1;
//         context3.strokeStyle = "#0099D9";
//         context3.stroke();

//         // 네 번째 캔버스
//         context4.beginPath();
//         context4.moveTo(500, 90);
//         context4.bezierCurveTo(200, -130, 70, 240, -200, 0);
//         context4.lineWidth = 1;
//         context4.strokeStyle = "#0099D9";
//         context4.stroke();

//         // 다섯 번째 캔버스
//         context5.beginPath();
//         context5.moveTo(0, -100);
//         context5.bezierCurveTo(100, 100, 90, 90, 200, 100);
//         context5.lineWidth = 1;
//         context5.strokeStyle = "#0099D9";
//         context5.stroke();

//         // 여섯 번째 캔버스
//         context6.beginPath();
//         context6.moveTo(0, 0);
//         context6.bezierCurveTo(700, -200, 400, 300, 131, 50);
//         context6.lineWidth = 1;
//         context6.strokeStyle = "#0099D9";
//         context6.stroke();

//     } else {
//         alert('브라우저가 캔버스를 지원하지 않습니다.');
//     }
// };




// box 움직임
// introduce.js

document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".canvasBox1");

    boxes.forEach((box, index) => {
        animateBox(box, index);
    });

    function animateBox(box, index) {
        const direction = index % 2 === 0 ? 1 : -1; // 번갈아가며 방향 전환

        setInterval(() => {
            box.style.transition = "transform 8s ease"; // 부드러운 이동을 위한 transition 설정
            box.style.transform = `translate(${direction * 3}rem, ${direction * 3}rem)`;

            setTimeout(() => {
                box.style.transition = "transform 8s"; // transition 초기화
                box.style.transform = "translate(0, 0)";
            }, 1000); // 지속 시간 조정
        }, 2000); // 간격 조정
    }

});
