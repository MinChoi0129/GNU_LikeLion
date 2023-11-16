export class DataBase{
    constructor(){
        this.Num = 0;
        this.MaxNum = 12;
        this.MonSection = document.querySelectorAll(".Mon");

        // 월 바뀔때마다 적용되는 css 추가해야됨 
        this.monDeg = {
            deg : [0,-1, 1, 2, 3, -1, -2, -3,-3,-3,-3]
        };
        this.transitionSpeed = [300, 150, 100];
    }

    changeSection(){
        for(let i=0; i<this.MonSection.length; i++){
            
            this.MonSection[i].style.transition = 'all 0.3s linear 0s';
            this.MonSection[i].style.transform = `rotate(${this.monDeg.deg[i]}deg)`;
        }
        let deg;
        for(let i=0; i<this.MonSection.length; i++){
            deg = this.monDeg.deg[i];        
        }
    }
}

