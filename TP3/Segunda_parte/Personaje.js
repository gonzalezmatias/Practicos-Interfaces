"use strict";

class Personaje{
    constructor(character){
        this.charId = character;
        this.elemId = document.getElementById(this.charId);
    }

    inicio(){
        this.elemId.classList.add('correr');
    }

    saltar(){
        this.elemId.classList.add('jump');
        setTimeout(() => {
        this.elemId.classList.remove('jump');            
        }, 800);        
    }
}