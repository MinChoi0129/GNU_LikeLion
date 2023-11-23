document.addEventListener("DOMContentLoaded", function () {
  const imgList = [
    "../static/image/exImg1.png",
    "../static/image/exImg2.png",
    "../static/image/exImg3.png",
    "../static/image/exImg4.png",
    "../static/image/exImg4.png",
    "../static/image/exImg4.png",
  ];
  let index = 0;
  const lastImgNum = imgList.length;
  const items = document.querySelectorAll('.item');
  const markerContainer = document.querySelector('.marker');

  // 좌측버튼 클릭시 changeImg 함수 사용
  document.getElementById('leftBtn').addEventListener('click', function () {
    index = (index - 1 + lastImgNum) % lastImgNum;
    showImage(index);
    updateMarker(index);
  });

  // 우측버튼 클릭시 changeImg 함수 사용
  document.getElementById('rightBtn').addEventListener('click', function () {
    index = (index + 1) % lastImgNum;
    showImage(index);
    updateMarker(index);
  });

  // 초기화 함수
  function showImage(index) {
    const dtimgBox = document.querySelector('.dtimgBox');
    const itemWidth = document.querySelector('.item').offsetWidth;
    const newPosition = -itemWidth * index;
    dtimgBox.style.transition = 'transform 0.5s ease';
    dtimgBox.style.transform = `translateX(${newPosition}px)`;

    items.forEach(item => {
      let dataIndex = parseInt(item.getAttribute('data-index'));
      if (dataIndex === index) {
        item.style.opacity = 0.55;
        item.style.transform = 'scale(0.65) translateX(20vw)';
        item.style.zIndex = "-999";
      } else if (dataIndex === index + 1) {
        item.style.opacity = 1;
        item.style.transform = 'scale(0.9)';
        item.style.zIndex = "999";
      } else if (dataIndex === index + 2) {
        item.style.opacity = 0.55;
        item.style.transform = 'scale(0.65) translateX(-20vw)';
        item.style.zIndex = "-999";
      } else if (dataIndex < index - 1) {
        item.style.display = 0;
        item.style.transform = 'scale(0.65) translateX(-20vw)';
      } else if (dataIndex > index + 2) {
        item.style.opacity = 0;
        item.style.transform = 'scale(0.65) translateX(20vw)';
      } else {
        item.style.opacity = 0;
        item.style.transform = 'scale(0.65)';
      }
    });
  }

  // Marker 업데이트 함수
  function updateMarker(index) {
    // 기존 marker 삭제
    markerContainer.innerHTML = '';

    // 동적으로 marker 추가
    for (let i = 0; i < lastImgNum; i++) {
      const page = document.createElement('div');
      page.classList.add('page');
      if (i === index) {
        page.classList.add('markerActive');
      }
      markerContainer.appendChild(page);
    }
  }

  // 초기화 함수 호출
  showImage(index);
  updateMarker(index);
});
