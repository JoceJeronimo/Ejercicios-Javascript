console.log("Ejercicio 3"); 

const arregloNum = [1, 2, 3, 4];

const factorialArr = ( element, index , array ) =>
     `soy el indice ${index}, valor ${element} del arreglo ${array}`;

     const sumatoria = arregloNum.reduce((suma, factorialArr) => {
     return suma + factorialArr;
}, 0);

function arreegloFactorial( arregloNum ) {
     let factorial = 1;
     for (let i=0; i < arregloNum; i++) {
         factorial *= (arregloNum - i);
     }
     return factorial;

}

alert(`El arreglo es: [${arregloNum}]
La sumatoria del arreglo es: ${sumatoria}
El factorial del arreglo es: ${arreegloFactorial(arregloNum.length)}`);
