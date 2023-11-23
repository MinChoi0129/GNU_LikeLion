// window.addEventListener("wheel", function(e){
//   e.preventDefault();
// }, {passive : false});

import{
  DataBase
}from './DB.js';

import{
  ScrollEvent
}from './scrollEvent.js';
export const database = new DataBase(); 
class Main{
  constructor(){
  this.scrollEvent = new ScrollEvent();
  }
}
window.onload = () => {
  new Main();
};