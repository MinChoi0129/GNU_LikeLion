export class DataBase{
    constructor(){
        this.Num = 0;
        this.MaxNum = 11;
        this.MonSection = document.querySelectorAll(".Mon");

        // 월 바뀔때마다 적용되는 css 추가해야됨 
        this.monDeg = {
            deg : [0, 20, 30, 40, 0, 0, 0, 0, 0, -40, -30, -20],
            moveX : [-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10],
            moveY : [-35,-35,-35,-35,-35,-35,-35,-35,-35,-35,-35,-25],
            top:[0,10, 20,40,50,50,50,50,-50,-40,-20,-10],
            left:[0,-0.5,-2.78,-10,0,0,0,200,200,-20,-7.4,-2.3],
            fontSize : [50,0,0,0,0,0,0,0,0,0,0,0]
        };
        this.transitionSpeed = [300, 150, 100];
    }

    changeSection(){
        for(let i=0; i<this.MonSection.length; i++){
            
            this.MonSection[i].style.transition = 'all 0.3s linear 0s'; //deg각도대로 움직일 때의 속도
            this.MonSection[i].style.transform = `rotate(${this.monDeg.deg[i]}deg)`;
            this.MonSection[i].style.fontSize = `${this.monDeg.fontSize[i]}px`;
            this.MonSection[i].style.top = `${this.monDeg.top[i]}rem`;
            this.MonSection[i].style.left = `${this.monDeg.left[i]}rem`;
        }        
    }
}
