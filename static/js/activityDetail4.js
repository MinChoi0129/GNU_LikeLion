//사진 넘기는 기능
document.addEventListener("DOMContentLoaded", function () {
    var imageList = [
      "../static/image/hackathon.png",
      "../static/image/hackathon2111.png",
      "../static/image/lion.png",
      "../static/image/lion.png",
      
    ];
  
 
  
    var currentIndex = 0;
    var imageContainers = document.querySelectorAll(".etcimg img");
    var sliderPages = document.querySelectorAll(".slider .page");
    var rightButton = document.querySelector(".rightarrow");
    var leftButton = document.querySelector(".leftarrow");
  
    function updateImageState() {
      for (var i = 0; i < imageContainers.length; i++) {
        var imageIndex = (currentIndex + i) % imageList.length;
        if (i < imageList.length) {
          imageContainers[i].src = imageList[imageIndex];
          imageContainers[i].style.display = "block";
        } else {
          imageContainers[i].style.display = "none";
        }
      }
  
      sliderPages.forEach(function (page, index) {
        if (index === currentIndex) {
          page.classList.add("sliderActive");
        } else {
          page.classList.remove("sliderActive");
        }
      });
  
      // 이미지 리스트의 길이에 따라 화살표를 표시 또는 숨김
      if (imageList.length <= 3) {
        rightButton.style.display = "none";
        leftButton.style.display = "none";
      } else {
        rightButton.style.display = "block";
        leftButton.style.display = "block";
      }
    }
  
    updateImageState();
  
    rightButton.addEventListener("click", function () {
      currentIndex = (currentIndex + imageList.length % 3) % imageList.length;
      updateImageState();
    });
  
    leftButton.addEventListener("click", function () {
      currentIndex = (currentIndex - imageList.length % 3 + imageList.length) % imageList.length;
      updateImageState();
    });
  });
  
  
  
  
  
  