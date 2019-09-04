"use strict";

let matrix = [];
let max = 0;
let par = 0;
let impar = 999999999;

// matrix creation
for(let i=0; i<100; i++) {
    matrix[i] = new Array(100);
}

// matrix initialitacion
for (let i = 0; i <matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
       matrix[i][j] = Math.floor(Math.random() * 10000000) + 1;
    }
    
}

// matrix max number
for (let i = 0; i <matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] > max) {
            max = matrix[i][j];
        }
        
    }
    
}
console.log("El valor maximo de la matriz es:" + max);

for (let i = 0; i <matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (i%2 == 0) {
            if (matrix[i][j] > par) {
                par = matrix[i][j];
            }
        }else{
            if (i%2 != 0) {
                if (matrix[i][j] < impar) {
                    impar = matrix[i][j];
                }
            }
        }
       
        
    }
    
}

console.log("El valor maximo de las filas pares es:" + par);
console.log("El valor maximo de las filas impares es:" + impar);