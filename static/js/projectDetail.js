document.addEventListener("DOMContentLoaded", function () {
  const imgList = [
    // "{% static 'image/exImg1.png' %}",
    // "{% static 'image/exImg2.png' %}",
    // "{% static 'image/exImg3.png' %}",
    // "{% static 'image/exImg3.png' %}",
    // "{% static 'image/exImg4.png' %}",
    // "{% static 'image/exImg2.png' %}",
     "../static/image/exImg1.png",
     "../static/image/exImg2.png",
     "../static/image/exImg3.png",
     "../static/image/exImg4.png",
     "../static/image/exImg4.png",
     "../static/image/exImg4.png",
  ];

  const dtimgBox = document.querySelector('.dtimgBox');
  const fisrtItem = document.createElement('div');
  fisrtItem.classList.add('item');
  fisrtItem.setAttribute('data-index',0)
  dtimgBox.appendChild(fisrtItem);


  imgList.forEach((imgSrc, index) => {
    const item = document.createElement('div');
    item.classList.add('item');
    item.setAttribute('data-index', index+1); // 인덱스 + 1 할당(data-index의 0은 항상 비어있어야하기때문에)
    
    if (index !== 0) { // 첫 번째 이미지는 비어있는 div로 유지
      const imgElement = document.createElement('img');
      imgElement.src = imgSrc;
      item.appendChild(imgElement);
    }

    dtimgBox.appendChild(item);
  });

  //마지막data-index에는 비어잇는거할당
   const lastItem = document.createElement('div');
   lastItem.classList.add('item');
   lastItem.setAttribute('data-index',imgList.length+1)
   dtimgBox.appendChild(lastItem);


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

  // Slider설정
  function updateMarker(index) {
    //슬라이더 초기화( 동적개수를 위해 )
    markerContainer.innerHTML = '';
    //동적 슬라이더 개수 설정 후 page에 삽입
    for (let i = 0; i < lastImgNum; i++) {
      const page = document.createElement('div');
      page.classList.add('page');
      if (i === index) {
        page.classList.add('markerActive');
      }
      markerContainer.appendChild(page);
    }
  }

  showImage(index);
  updateMarker(index);
});
