"use strict";

//  let mainCharacter = document.getElementById("character");

// mainCharacter.addEventListener("keypress", saltar);

const mainCharacter = document.querySelector('.nami');
const style = getComputedStyle(mainCharacter);
console.log(style.top);

document.addEventListener("keydown", saltar);
document.addEventListener("keyup", caer);


function saltar(){
    console.log("key down");
    console.log(style.top);
    mainCharacter.style.top = 180 + "px";
}
function caer(){
    console.log("key up");
    console.log(style.top);

    mainCharacter.style.top = 234.5 +"px";
}

