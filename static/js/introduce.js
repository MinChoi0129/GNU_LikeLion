// box 움직임

// DOMContentLoaded 이벤트가 발생했을 때 실행할 함수 등록
document.addEventListener("DOMContentLoaded", function () {
    // ".canvasBox1" 클래스를 가진 모든 요소를 선택하여 NodeList로 가져오기
    const boxes = document.querySelectorAll(".canvasBox1");

    // NodeList의 각 요소에 대해 animateBox 함수 호출
    boxes.forEach((box, index) => {
        animateBox(box, index);
    });

    // animateBox 함수 정의
    function animateBox(box, index) {
        // 번갈아가며 움직이는 방향 설정 (짝수 인덱스는 1, 홀수 인덱스는 -1)
        const direction = index % 2 === 0 ? 1 : -1;

        // 일정 간격으로 함수를 반복 실행하는 setInterval 사용
        setInterval(() => {
            // 부드러운 이동을 위한 CSS transition 속성 설정
            box.style.transition = "transform 5s ease";
            
            // 상자를 지정된 거리만큼 이동시킴
            box.style.transform = `translate(${direction * 3}rem, ${direction * 4}rem)`;

            // 일정 시간이 지난 후에 이동한 거리를 초기화하여 다시 처음 위치로 되돌림
            setTimeout(() => {
                box.style.transition = "transform 5s ease"; // transition 초기화
                box.style.transform = "translate(0, 0)";
            }, 1000); // 1초 후에 초기화

        }, 2000); // 2초 간격으로 실행
    }
});