"use strict";

let context= document.getElementById("canvas").getContext("2d");
let width=document.getElementById("canvas").width;
let height=document.getElementById("canvas").height;
let a=255;

let r=255;
let imageData=context.createImageData(width,height);

for (let x = 0; x < imageData.height; x++) {
  for(let y=0;y<imageData.width;y++){
    if(y<=imageData.width/2){
      let color= y/(imageData.width/2-1)*255;
      setPixel(imageData,y,x,color,color,0,a);
    }else{
      let color=(imageData.width/2)/y*255;
      setPixel(imageData,y,x,r,color,0,a);
    }
    }
  }
 
    
  context.putImageData(imageData,0,0);


function setPixel(imageData,x,y,r,g,b,a) {
  let  index=(x+y*imageData.width)*4;
  imageData.data[index+0]=r;
  imageData.data[index+1]=g;
  imageData.data[index+2]=b;
  imageData.data[index+3]=a;
}