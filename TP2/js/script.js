"use strict";

let canvas = document.getElementById('canvas'); 
let ctx = canvas.getContext('2d');
let figura = new Figura(ctx);
let cerrarFigura = document.getElementById("cerrarPoligono").addEventListener("click", cerrarPoligono)
let figuras = [];
let figuraSeleccionada = null;
let mouseDown = false;

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
      if(esVacio(x,y) == null){
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
  if (figuras.length > 0) {
    for (var i = 0; i < figuras.length; i++) {
      let element = figuras[i];
      if (element.circuloClickeado(x, y) !=null) {
        return element.circuloClickeado(x, y);
      }else{
        if (element.centroClickeado(x, y) != null) {
          return element.centroClickeado(x, y)
        }
      }
    }
  }
  return null;
}

canvas.onmousedown = function (e) {
  let x = e.pageX - this.offsetLeft; 
  let y = e.pageY - this.offsetTop;
  if (esVacio(x,y) != null) {
    figuraSeleccionada = esVacio(x,y);
    figuraSeleccionada.sayHi();
    mouseDown = true;

  }
  
}

canvas.onmousemove = function (e){
  if (mouseDown) {
    console.log("atroden")
    figuraSeleccionada.nuevasCoordenadas(e.pageX,e.pageY)
    
  }
}


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