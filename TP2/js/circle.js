"use strict";

class Circle {
    constructor(posx, posy, radio, color){
        this.posx = posx;
        this.posy = posy;
        this.radio = radio;
        this.color = color;
    
    }

    crearCirculo(ctx){
         ctx.fillStyle = this.color;        
         ctx.beginPath();
         ctx.arc(this.posx,  this.posy, this.radio,0, 2*Math.PI);
         ctx.fill(); 
    };

    getPosy(){
        return this.posy;
    };

    getPosx(){
        return this.posx;

    }

   esCliqueado(x,y){
       return Math.sqrt( Math.pow((x - this.posx),2) + Math.pow((y - this.posy),2)  ) <= this.radio;
   }

    sayHi(){
        console.log("hi");
        console.log(this.posx);
        console.log(this.posy);
    }

    nuevasCoordenadas(x,y){
        this.posx = x;
        this.posy = y;
    }


}