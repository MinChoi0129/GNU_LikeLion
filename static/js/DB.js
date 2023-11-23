export class DataBase{
    constructor(){
        this.Num = 1;
        this.MaxNum = 11;
        this.MonSection = document.querySelectorAll(".Mon");

        // 월 바뀔때마다 적용되는 css 추가해야됨 
        this.monDeg = {
            deg : [0, 20, 30, 40, 0, 0, 0, 0, 0, -40, -30, -20],
            moveX : [-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10],
            moveY : [-35,-35,-35,-35,-35,-35,-35,-35,-35,-35,-35,-25],
            top:[0,10, 20,40,50,50,50,50,-50,-40,-20,-10],
            left:[-0.4,-0.3,-2,-10,0,0,0,200,200,-20,-9.2,-3.4],
            fontSize : [0,0,0,0,0,0,0,0,0,0] 
        };
        this.transitionSpeed = [300, 150, 100];
    }

    changeSection(){
        for(let i=0; i<this.MonSection.length; i++){
            
            this.MonSection[i].style.transition = 'all 0.25s ease'; //deg각도대로 움직일 때의 속도
            this.MonSection[i].style.transform = `rotate(${this.monDeg.deg[i]}deg)`;
            this.MonSection[i].style.top = `${this.monDeg.top[i]}rem`;
            this.MonSection[i].style.left = `${this.monDeg.left[i]}rem`;
            // this.MonSection[i].style.fontSize = `${this.monDeg.fontSize[i]}rem`;

            if (this.monDeg.deg[i] === 0) {
                this.MonSection[i].style.fontSize = '2rem'; // 또는 적절한 크기로 변경
            } else {
                this.MonSection[i].style.fontSize = '1rem'; // 0이 아닌 경우는 원래 크기로 유지
            }     
        }
    }

    
}
    
