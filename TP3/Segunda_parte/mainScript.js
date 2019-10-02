"use strict";

window.addEventListener('DOMContentLoaded',(event) =>{
  const nami = new Personaje('main-character');
  const smoke = new Enemigo('main-enemigo');



  function salto(e){
    if (e.type == 'keydown') {
      nami.saltar();
    }
  }

  function inicio(){
    nami.inicio();
    smoke.inicio();

  }


  inicio();

  window.addEventListener('keydown',salto);

})