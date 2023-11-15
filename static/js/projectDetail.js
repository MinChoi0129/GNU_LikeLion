document.addEventListener('DOMContentLoaded', function() {
    var imageList = [
        "/static/image/exImg1.png",
        "/static/image/exImg2.png",
        "/static/image/exImg3.png",
        "/static/image/exImg4.png",

    ];

    var currentIndex = 0;
    var imageContainers = document.querySelectorAll('.eximg img');
    var sliderContainer = document.querySelector('.slider');

    for (var i = 0; i < imageList.length; i++) {
        var sliderPage = document.createElement('div');
        sliderPage.classList.add('page');
        if (i === currentIndex) {
            sliderPage.classList.add('sliderActive');
        }
        sliderContainer.appendChild(sliderPage);
    }

    var sliderPages = document.querySelectorAll('.slider .page');

 function updateImageState() {
    var prevIndex = (currentIndex - 1 + imageList.length) % imageList.length;
    var nextIndex = (currentIndex + 1) % imageList.length;

    // 이전 이미지 처리
    if (currentIndex === 0) {
        imageContainers[0].src = imageList[imageList.length - 1];
    } else {
        imageContainers[0].src = imageList[prevIndex];
    }

    // 현재 이미지 처리
    imageContainers[1].src = imageList[currentIndex];

    // 다음 이미지 처리
    if (currentIndex === imageList.length - 1) {
        imageContainers[2].src = imageList[0];
    } else {
        imageContainers[2].src = imageList[nextIndex];
    }

    // 슬라이더 업데이트
    sliderPages.forEach(function (page, index) {
        if (index === currentIndex) {
            page.classList.add('sliderActive');
        } else {
            page.classList.remove('sliderActive');
        }
    });
}


    updateImageState();

    var rightButton = document.querySelector('.fa-circle-chevron-right');
    rightButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % imageList.length;
        updateImageState();
    });

    var leftButton = document.querySelector('.fa-circle-chevron-left');
    leftButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
        updateImageState();
    });
});
