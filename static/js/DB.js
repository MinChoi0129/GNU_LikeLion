export class DataBase{
    constructor(){
        this.Num = 0;
        this.MaxNum = 20;
        this.MonSection = document.querySelectorAll(".Mon");

        // 월 바뀔때마다 적용되는 css 추가해야됨 
        this.monDeg = {
            deg : [0, 30, 60, 90, 0, 0, 0, 0, 0, -90, -60, -30],
            moveX: [-12, -10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10], // X 축 이동
            moveY: [-35, -32, -28, -23, -18, -14, -10, -7, -5, -3, -2, -1],
            fontSize : [50,0,0,0,0,0,0,0,0,0,0,0]
        };
        this.transitionSpeed = [300, 150, 100];
    }

    changeSection(){
        for(let i=0; i<this.MonSection.length; i++){
            
            this.MonSection[i].style.transition = 'all 0.3s linear 0s'; //deg각도대로 움직일 때의 속도
            this.MonSection[i].style.transform = `rotate(${this.monDeg.deg[i]}deg) translate(${this.monDeg.moveX[i]}rem, ${this.monDeg.moveY[i]}rem)`;
            
            this.MonSection[i].style.fontSize = `${this.monDeg.fontSize[i]}px`;
        }        
    }

    
}
    
