"use strict";

let canvas = document.getElementById('canvas'); 
let ctx = canvas.getContext('2d');
let figura = new Figura(ctx);
let cerrarFigura = document.getElementById("cerrarPoligono").addEventListener("click", cerrarPoligono)
let figuras = [];

canvas.onmousemove = function(e) { 
    let x = e.pageX - this.offsetLeft; 
    let y = e.pageY - this.offsetTop;     
    document.getElementById("posx").innerHTML = x;
    document.getElementById("posy").innerHTML = y;
}

canvas.onclick = function(e) { 
    let x = e.pageX - this.offsetLeft; 
    let y = e.pageY - this.offsetTop;
    document.getElementById("posxc").innerHTML = x;
    document.getElementById("posyc").innerHTML = y;
      if(esVacio(x,y)){
        let circle = new Circle(x,y,10,'red');
        circle.crearCirculo(ctx);
        figura.agregarCirculo(circle);
      }
}

function cerrarPoligono(){
  if (figura.getCantidad() > 2) {
    figura.cerrarPoligono();
    figuras.push(figura);
    figura = new Figura(ctx);
  }else{
    console.log("NO!");
  }
}



function esVacio(x,y) {
  // if (figura.circuloClickeado(x, y)) {
  //   return false;
  // } else 
  if (figuras.length > 0) {
    for (var i = 0; i < figuras.length; i++) {
      const obj = figuras[i];
      if (obj.circuloClickeado(x, y) || obj.centroClickeado(x, y)) {
        return false;
      }
    }
  }
  return true;
}

// canvas.onmousedown = function (e) {
//   for (let index = 0; index < figuras.length; index++) {
//     const element = figuras[index];
//     console.log(element.getCentro().esCliqueado(e.pageX,e.pageY))
//   }
// }


// function esVacio(event) {
//   if (figura.clickCirculo(event.layerX, event.layerY) != null) {
//     return false;
//   } else if (figuras.length > 0) {
//     for (var i = 0; i < figuras.length; i++) {
//       const obj = figuras[i];
//       if (obj.clickCirculo(event.layerX, event.layerY) || obj.clickCentro(event.layerX, event.layerY)) {
//         return false;
//       }
//     }
//   }
//   return true;
// }