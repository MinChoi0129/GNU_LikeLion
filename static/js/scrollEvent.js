import{
    database
}from './planpage.js';

export class ScrollEvent{
    constructor(){
        this.MonSection = database.MonSection;
        window.addEventListener('wheel', this.wheelEvent.bind(this));
        this.canwheel = true;
    }

    wheelEvent(data){
        if(this.canwheel){
            this.canwheel = false;
            const wheelValue = data.wheelDelta;

            let MonSectiontemp = [...database.MonSection];
            let temp;

            if(wheelValue < 0){
                database.Num++;
                if(database.Num > database.MaxNum){
                    database.Num--;
                }
                else{
                    temp = MonSectiontemp[0];
                    MonSectiontemp.shift();
                    MonSectiontemp.push(temp);
                    database.MonSection = [...MonSectiontemp];
                }
            }

            else if(wheelValue > 0){
                database.Num--;
                if(database.Num < 0){
                    database.Num++;
                }
                else{
                    temp = MonSectiontemp[database.MonSection.length-1];
                    MonSectiontemp.pop();
                    MonSectiontemp.unshift(temp);
                    database.MonSection = [...MonSectiontemp];
                }
            }

            database.changeSection();
            console.log(`Num : ${database.Num}`)
            
            setTimeout(() => {
                this.canwheel = true;
            },200);
            
        }
    }
}