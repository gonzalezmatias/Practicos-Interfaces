"use strict";

class Figura {
    constructor(ctx){
        this.ctx = ctx;
        this.circulos = [];
        this.centro = null;
    }

    agregarCirculo(circulo){
        this.circulos.push(circulo);

        if (this.circulos.length > 1) {
            this.dibujarLinea(this.circulos[this.circulos.length-1], this.circulos[this.circulos.length-2]);
           
        }
     
    }
    dibujarLinea(circuloUltimo, circuloAnterior){

        this.ctx.beginPath();
        this.ctx.lineWidth = "3";
        this.ctx.strokeStyle = 'yellow';
        this.ctx.moveTo(circuloAnterior.getPosx(), circuloAnterior.getPosy());
        this.ctx.lineTo(circuloUltimo.getPosx(), circuloUltimo.getPosy());
        this.ctx.stroke();
        this.ctx.closePath();

        // console.log(circuloUltimo.getPosy());
        // console.log(circuloAnterior.getPosy());
    }

    cerrarPoligono(){
        this.ctx.beginPath();
        this.ctx.moveTo(this.circulos[0].getPosx(), this.circulos[0].getPosy());
        this.ctx.lineTo(this.circulos[this.circulos.length-1].getPosx(), this.circulos[this.circulos.length-1].getPosy());
        this.ctx.stroke();
        this.ctx.closePath();

        this.dibujarCentro();
    }

    getCantidad(){
        return this.circulos.length;
    }

    dibujarCentro(){
        let totx = 0;
        let toty = 0;
        for (let index = 0; index < this.circulos.length; index++) {
            totx += this.circulos[index].getPosx();
            toty += this.circulos[index].getPosy();
         }
         let centrox = totx / this.circulos.length;
         let centroy = toty / this.circulos.length;
         this.centro = new Circle(centrox,centroy,7,'green');
         this.centro.crearCirculo(ctx);
    }

    getCentro(){
        return this.centro;
    }

    circuloClickeado(x,y){
        for (let index = 0; index < this.circulos.length; index++) {
            if (this.circulos[index].esCliqueado(x,y)) {
                console.log("es click circulo");
                return true;
            }           
        }
        return false;
    }

    centroClickeado(x,y){
        console.log("es click centro");

        return this.centro.esCliqueado(x,y);
    }

    
}