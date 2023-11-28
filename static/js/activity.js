// 10th, 11th 버튼 클릭 이벤트
document.addEventListener("DOMContentLoaded", function () {

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

    const postList = document.querySelector(".post-list");
    const nextButton = document.getElementById("nextButton");

    // 다음 포스트로 이동하는 함수
    function shiftPosts() {
        postList.style.transform = "translateX(-25%)";
        setTimeout(() => {
            const firstPost = postList.removeChild(postList.firstElementChild);
            postList.appendChild(firstPost);
            postList.style.transform = "translateX(0)";
        }, 300);
    }

    // 다음 버튼 클릭 이벤트 등록
    nextButton.addEventListener("click", function () {
        // 슬라이드 효과와 포스트 이동 효과를 겹치지 않도록 시간 간격을 두어 실행
        setTimeout(() => {
            shiftPosts();
        }, 50);
    });
});

