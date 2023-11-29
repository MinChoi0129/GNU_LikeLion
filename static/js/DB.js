export class DataBase{
    constructor(){
        this.Num = 0;
        this.MaxNum = 11;
        this.MonSection = document.querySelectorAll(".Mon");

        this.MonSectionNum = document.querySelectorAll(".monthNum");

        // 월 바뀔때마다 적용되는 css 추가해야됨 
        this.monDeg = {
            deg : [0, 20, 30, 40, 0, 0,0, 0, 0, 0, 0, -40, -30, -20],
            moveX : [-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10],
            moveY : [-35,-35,-35,-35,-35,-35,-35,-35,-35,-35,-35,-25],
            top:[0,15,35,45,55,65,65,65,65, 65, -65,-55,-45,-15],
            left:[-0.2,-1.4,-2.78,-10,0,0,0,0, 0, 200,200,-20,-6.7,-4.25],
            fontSize : [50,0,0,0,0,0,0,0,0,0,0,0]
        };
        this.transitionSpeed = [300, 150, 100];

    }

    changeSection(){
        for(let i=0; i<this.MonSection.length; i++){
            
            this.MonSection[i].style.transition = 'all 0.2s ease'; //deg각도대로 움직일 때의 속도
            this.MonSection[i].style.transform = `rotate(${this.monDeg.deg[i]}deg)`;
            // this.MonSection[i].style.fontSize = `${this.monDeg.fontSize[i]}px`;
            this.MonSection[i].style.top = `${this.monDeg.top[i]}rem`;
            this.MonSection[i].style.left = `${this.monDeg.left[i]}rem`;

            console.log(i);
            console.log(this.MonSectionNum[i]);
            console.log(this.MonSection);
            console.log(this.MonSection[i]);
            if(this.MonSection[i].deg == 0){
                this.MonSectionNum[i].style.fontSize = `${this.monDeg.fontSize[i]}px`;
            }
            

        }        
    }
}