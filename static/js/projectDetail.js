document.addEventListener("DOMContentLoaded", function () {
  var imageList = [
    "../static/image/exImg1.png",
    "../static/image/exImg2.png",
    "../static/image/exImg3.png",
    "../static/image/exImg4.png",
  ];

  var currentIndex = 0;
  var imageContainers = document.querySelectorAll(".eximg img");
  var sliderContainer = document.querySelector(".slider");

  for (var i = 0; i < imageList.length; i++) {
    var sliderPage = document.createElement("div");
    sliderPage.classList.add("page");
    if (i === currentIndex) {
      sliderPage.classList.add("sliderActive");
    }
    sliderContainer.appendChild(sliderPage);
  }

  var sliderPages = document.querySelectorAll(".slider .page");

  function updateImageState() {
    imageContainers[1].src = imageList[currentIndex];
    imageContainers[1].classList.remove("noFirstViewImg");
    imageContainers[1].classList.remove("noLastViewImg");

    var prevIndex = (currentIndex - 1 + imageList.length) % imageList.length;
    var nextIndex = (currentIndex + 1) % imageList.length;

    imageContainers[0].src = imageList[prevIndex];
    imageContainers[2].src = imageList[nextIndex];

    if (currentIndex === 0) {
      imageContainers[0].classList.add("noFirstViewImg");
    } else {
      imageContainers[0].classList.remove("noFirstViewImg");
    }

    if (currentIndex === imageList.length - 1) {
      imageContainers[2].classList.add("noLastViewImg");
    } else {
      imageContainers[2].classList.remove("noLastViewImg");
    }

    sliderPages.forEach(function (page, index) {
      if (index === currentIndex) {
        page.classList.add("sliderActive");
      } else {
        page.classList.remove("sliderActive");
      }
    });
  }

  updateImageState();

  var rightButton = document.querySelector(".fa-circle-chevron-right");
  rightButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % imageList.length;
    updateImageState();
  });

  var leftButton = document.querySelector(".fa-circle-chevron-left");
  leftButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
    updateImageState();
  });
});
