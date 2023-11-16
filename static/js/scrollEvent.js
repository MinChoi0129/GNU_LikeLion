import{
    DataBase
}from './DB';

export class ScrollEvent{
    constructor(){
        this.MonSection = DB.MonSection;
        window.addEventListener('wheel', this.wheelEvent.bind(this));
        this.canwheel = true;
    }

    wheelEvent(data){
        if(this.canwheel){
            this.canwheel = false;
            const wheelValue = data.wheelDelta;

            let MonSectiontemp = [...DataBase.MonSection];
            let temp;

            if(wheelValue < 0){
                DataBase.Num++;
                if(DataBase.Num > DataBase.MaxNum){
                    DataBase.Num--;
                }
                else{
                    temp = MonSectiontemp[0];
                    MonSectiontemp.shift();
                    MonSectiontemp.push(temp);
                    DataBase.MonSection = [...MonSectiontemp];
                }
            }

            else if(wheelValue > 0){
                DataBase.Num--;
                if(DataBase.Num < 0){
                    DataBase.Num++;
                }
                else{
                    temp = MonSectiontemp[DataBase.MonSection.length-1];
                    MonSectiontemp.pop();
                    MonSectiontemp.unshift(temp);
                    DataBase.MonSection = [...MonSectiontemp];
                }
            }

            
            
        }
    }
}