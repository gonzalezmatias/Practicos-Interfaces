"use strict";

let context = document.getElementById("canvas").getContext("2d");
let width=document.getElementById("canvas").width;
let height=document.getElementById("canvas").height;

context.fillStyle="red";
context.fillRect(0,0,width,height); // (empieza en x, empieza en y, w,h) 
context.stroke();

