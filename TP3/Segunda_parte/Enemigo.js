"use strict";

class Enemigo{
    constructor(character){
        this.charId = character;
        this.elemId = document.getElementById(this.charId);
    }

    inicio(){
        this.elemId.classList.add('atacar');
        setTimeout(() => {
            this.elemId.classList.add('mover');
            
        }, 4000);
    }

 
}