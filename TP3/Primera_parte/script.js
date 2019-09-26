"use strict";

let random = document.getElementById("random");

random.addEventListener('click', randomTransform);

function randomTransform (){
   let allClases = ['make-bigger', 'change-position', 'change-color'];
   let classNumber = Math.floor((Math.random() * 3));
   random.classList.toggle(allClases[classNumber]);
}