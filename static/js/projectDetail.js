// projectDetail.js
import { getProjectDataById } from './restApiData.js';

class ProjectDetail {
  constructor() {
    this.currentIndex = 0; // 현재 이미지 인덱스를 저장하는 변수 추가
    this.init();
  }

  async init() {
    const projectId = this.getProjectIdFromUrl();
    if (projectId !== null) {
      const projectData = await getProjectDataById(projectId);
      if (projectData && projectData.images) {
        const imgList = this.createImgList(projectData.images);
        this.setupImages(imgList);
        this.setupImageSlider();
      }
    }

    // 좌우버튼 클릭시에만 setupImageSlider()를 호출
    document.getElementById('leftBtn').addEventListener('click', () => {
      this.setupImageSlider(-1);
    });

    document.getElementById('rightBtn').addEventListener('click', () => {
      this.setupImageSlider(1);
    });
  }

  createImgList(images) {
    return images.map(img => img.image);
  }

  getProjectIdFromUrl() {
    const urlParts = window.location.pathname.split('/');
    const projectIdIndex = urlParts.indexOf('project') + 1;

    if (projectIdIndex < urlParts.length) {
      const projectId = parseInt(urlParts[projectIdIndex]);
      return isNaN(projectId) ? null : projectId;
    }

    return null;
  }

  setupImages(imgList) {
    const dtimgBox = document.querySelector('.dtimgBox');

    // 맨 처음에 # 이미지 추가
    const hashItem = document.createElement('div');
    hashItem.classList.add('item', 'empty');
    dtimgBox.appendChild(hashItem);

    imgList.forEach((imgSrc, index) => {
      const item = document.createElement('div');
      item.classList.add('item');
      item.setAttribute('data-index', index + 1);

      const imgElement = document.createElement('img');
      imgElement.src = imgSrc;

      if (index === 0) {
        // 1번째 인덱스에는 이미지 0번째 인덱스의 이미지 추가
        imgElement.src = imgList[0];
      }

      item.appendChild(imgElement);
      dtimgBox.appendChild(item);
    });

    // 맨 뒤에 빈 이미지 추가
    const lastEmptyItem = document.createElement('div');
    lastEmptyItem.classList.add('item', 'empty');
  }

  showImage(index) {
    const dtimgBox = document.querySelector('.dtimgBox');
    const itemWidth = document.querySelector('.item').offsetWidth;
    const newPosition = -itemWidth * index;
    dtimgBox.style.transition = 'transform 0.5s ease';
    dtimgBox.style.transform = `translateX(${newPosition}px)`;

    const items = document.querySelectorAll('.item');

    items.forEach(item => {
      let dataIndex = parseInt(item.getAttribute('data-index'));

      if (dataIndex === index || dataIndex === index + 2) {
        // 맨 왼쪽과 맨 오른쪽에만 opacity 적용
        item.style.opacity = 0.55;
      } else if (dataIndex === index + 1) {
        item.style.opacity = 1;
      } else {
        item.style.opacity = 0;
      }

      // 나머지 스타일은 여기에 추가
      if (dataIndex === index) {
        item.style.transform = 'scale(0.65) translateX(20vw)';
        item.style.zIndex = "-999";
      } else if (dataIndex === index + 1) {
        item.style.transform = 'scale(0.9)';
        item.style.zIndex = "999";
      } else if (dataIndex === index + 2) {
        item.style.transform = 'scale(0.65) translateX(-20vw)';
        item.style.zIndex = "-999";
      } else if (index === 0 && dataIndex === items.length - 2) {
        item.style.transform = 'scale(0.65)';
        item.style.zIndex = '-999';
      } else {
        item.style.transform = 'scale(0.65)';
        item.style.display = 'block';
      }
    });

    // 현재 인덱스 업데이트
    this.currentIndex = index;
  }
//dd
  updateMarker(index) {
    const markerContainer = document.querySelector('.marker');
    const lastImgNum = document.querySelectorAll('.item').length-1;

    markerContainer.innerHTML = '';

    for (let i = 0; i < lastImgNum; i++) {
      const page = document.createElement('div');
      page.classList.add('page');
      if (i === index) {
        page.classList.add('markerActive');
      }
      markerContainer.appendChild(page);
    }
  }

  setupImageSlider(direction) {
    const items = document.querySelectorAll('.item');

    if (direction === -1) {
      this.currentIndex = (this.currentIndex - 1 + items.length - 1) % (items.length - 1);
    } else if (direction === 1) {
      this.currentIndex = (this.currentIndex + 1) % (items.length - 1);
    }

    this.showImage(this.currentIndex);
    this.updateMarker(this.currentIndex);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ProjectDetail();
});
