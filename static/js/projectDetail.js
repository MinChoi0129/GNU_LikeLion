// projectDetail.js
import { getProjectDataById } from './restApiData';

class ProjectDetail {
  constructor() {
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
  }

  getProjectIdFromUrl() {
    const urlParts = window.location.pathname.split('/');
    const projectIdIndex = urlParts.indexOf('projectDetail') + 1;

    if (projectIdIndex < urlParts.length) {
      const projectId = parseInt(urlParts[projectIdIndex]);
      return isNaN(projectId) ? null : projectId;
    }

    return null;
  }

  setupImages(imgList) {
    const dtimgBox = document.querySelector('.dtimgBox');
    const firstItem = document.createElement('div');
    firstItem.classList.add('item');
    firstItem.setAttribute('data-index', 0);
    dtimgBox.appendChild(firstItem);

    imgList.forEach((imgSrc, index) => {
      const item = document.createElement('div');
      item.classList.add('item');
      item.setAttribute('data-index', index + 1);

      if (index !== 0) {
        const imgElement = document.createElement('img');
        imgElement.src = imgSrc;
        item.appendChild(imgElement);
        dtimgBox.appendChild(item);
      }
    });
  }

  createImgList(images) {
    return images.map(img => `http://127.0.0.1:8000${img.image}`);
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
      } else if (dataIndex < index - 1 || dataIndex > index + 2) {
        item.style.display = 'none';
      } else {
        item.style.opacity = 0;
        item.style.transform = 'scale(0.65)';
        item.style.display = 'block';
      }
    });
  }

  updateMarker(index) {
    const markerContainer = document.querySelector('.marker');
    const lastImgNum = document.querySelectorAll('.item').length - 1;

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

  setupImageSlider() {
    let index = 0;
    const items = document.querySelectorAll('.item');

    document.getElementById('leftBtn').addEventListener('click', () => {
      index = (index - 1 + items.length - 1) % (items.length - 1);
      this.showImage(index);
      this.updateMarker(index);
    });

    document.getElementById('rightBtn').addEventListener('click', () => {
      index = (index + 1) % (items.length - 1);
      this.showImage(index);
      this.updateMarker(index);
    });

    this.showImage(index);
    this.updateMarker(index);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ProjectDetail();
});
