"use strict";

let context = document.getElementById("canvas").getContext("2d");
let context2 = document.getElementById("canvas2").getContext("2d");
let width=document.getElementById("canvas").width;
let height=document.getElementById("canvas").height;



let image = new Image();
image.src = "image.jpg";



image.onload = function(){
    context.drawImage(image, 0, 0);
    context2.drawImage(image, 0, 0);
    grayScale(context2);
};

function grayScale(context) {
    let imgData = context.getImageData(0, 0, width, height);
     let pixels  = imgData.data;
        for (let i = 0, n = pixels.length; i < n; i += 4) {
            let grayscale = pixels[i] * .3 + pixels[i+1] * .59 + pixels[i+2] * .11;
            pixels[i  ] = grayscale;        
            pixels[i+1] = grayscale;        
            pixels[i+2] = grayscale;        
      
    }
   
    context.putImageData(imgData, 0, 0);
  }
