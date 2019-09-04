"use strict";

let context = document.getElementById("canvas").getContext("2d");
let width=document.getElementById("canvas").width;
let height=document.getElementById("canvas").height;
let imageData = context.createImageData(width, height);

for (let x = 0; x < height; x++) {
    let color=x/(height-1)*255;
   for (let y = 0; y < width; y++) {
       setPixel(imageData,y,x,color,color,color,255)
       
   }
    
}

context.putImageData(imageData,0,0);

function setPixel (imageData,x,y,r,g,b,a) {
   let index = (x + y * imageData.width)*4;
    imageData.data[index+0] = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = a;
}

