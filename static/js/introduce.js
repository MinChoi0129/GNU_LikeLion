window.onload = function () {
    var canvas = document.getElementById('canvas');
    var canvas2 = document.getElementById('canvas2');
    var canvas3 = document.getElementById('canvas3');

    if (canvas.getContext && canvas2.getContext) {
        var context = canvas.getContext('2d');
        var context2 = canvas2.getContext('2d');
        var context3 = canvas3.getContext('2d');

        // 첫 번째 캔버스
        context.beginPath();
        context.moveTo(-250, 100);
        context.bezierCurveTo(300, -100, 40, 500, 750, 500);
        context.lineWidth = 1;
        context.strokeStyle = "#0099D9";
        context.stroke();

        // 두 번째 캔버스
        context2.beginPath();
        context2.moveTo(200, 0);
        context2.bezierCurveTo(650, -100, 250, 300, 131, 0);
        context2.lineWidth = 1;
        context2.strokeStyle = "#0099D9";
        context2.stroke();

        // 세 번째 캔버스
        context3.beginPath();
        context3.moveTo(0, 0);
        context3.bezierCurveTo(650, -100, 250, 300, -200, 0);
        context3.lineWidth = 1;
        context3.strokeStyle = "#0099D9";
        context3.stroke();

    } else {
        alert('브라우저가 캔버스를 지원하지 않습니다.');
    }
};
