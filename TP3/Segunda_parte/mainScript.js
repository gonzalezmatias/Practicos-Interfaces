"use strict";

//  let mainCharacter = document.getElementById("character");

// mainCharacter.addEventListener("keypress", saltar);

const mainCharacter = document.getElementById('character');
const style = getComputedStyle(mainCharacter);
let initialPos = 234.5;
console.log(style.top);

document.addEventListener("keypress", saltar);



function saltar(){
    mainCharacter.classList.remove('nami');
    mainCharacter.classList.add('jump');
    mainCharacter.addEventListener('animationend',function(e){
        mainCharacter.classList.remove('jump');
        mainCharacter.classList.add('caer');
        mainCharacter.addEventListener('animationend',function(e){
            mainCharacter.classList.remove('caer');
            mainCharacter.classList.add('nami');
        })
    })
}


