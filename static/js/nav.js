// JavaScript 코드
document.addEventListener('DOMContentLoaded', function() {
    var navItem = document.querySelectorAll('nav li');

    navItem.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            var box = document.createElement('div');
            box.classList.add('box');
            item.appendChild(box);
            var link = item.querySelector('a');
            if (link) {
                link.style.color = '#000000';
            }
            // li 요소의 위치와 크기 가져오기
            var liRect = item.getBoundingClientRect();

            // 박스의 위치 설정
            box.style.left = liRect.left + 'px';
            box.style.top = liRect.top + 'px';
            box.style.width = liRect.width + 'px';
            box.style.height = liRect.height + 'px';
        });

        item.addEventListener('mouseleave', function() {
            var box = item.querySelector('.box');
            if (box) {
                box.remove();
            }
            if (link) {
                link.style.color = '';
            }
            var link = item.querySelector('a');

        });
    });
});
