document.addEventListener("DOMContentLoaded", function () {

    var slideBarIcon = document.querySelector('.firstPageSlideBarIcon');
    var firstPage = document.querySelector('.firstPage');
    var secondPage = document.querySelector('.secondPage');



    slideBarIcon.addEventListener('click', function () {
        firstPage.classList.toggle('hidden');
        secondPage.classList.toggle('visible');
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
