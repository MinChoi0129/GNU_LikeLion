//사진넘기는 기능
document.addEventListener("DOMContentLoaded", function () {
    var imageList = [
      "../static/image/hackathon.png",
      "../static/image/OT.png",
      "../static/image/hackathon.png",
      "../static/image/OT.png",
      "../static/image/hackathon2.png",
      "../static/image/OT.png",
    ];
  
    var currentIndex = 0;
    var imageContainers = document.querySelectorAll(".etcimg img");
    var sliderPages = document.querySelectorAll(".slider .page");
  
    function updateImageState() {
      for (var i = 0; i < imageContainers.length; i++) {
        var imageIndex = (currentIndex + i) % imageList.length;
        imageContainers[i].src = imageList[imageIndex];
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
  
    var rightButton = document.querySelector(".rightarrow");
    rightButton.addEventListener("click", function () {
      currentIndex = (currentIndex + 3) % imageList.length;
      updateImageState();
    });
  
    var leftButton = document.querySelector(".leftarrow");
    leftButton.addEventListener("click", function () {
      currentIndex = (currentIndex - 3 + imageList.length) % imageList.length;
      updateImageState();
    });
  });

//화살표 관련
