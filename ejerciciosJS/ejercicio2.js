console.log("Segundo ejercicio"); 

function duplicar(){
const myFncCallBack = ( element, index , array ) =>
     `soy el indice ${index}, valor ${element} del arreglo ${array}`;

const numbers = [1,2,4,5]
const duplicateOriginal = numbers.map( myFncCallBack );
const duplicate = numbers.map( element => element *2 );

console.log( numbers );
console.log( duplicateOriginal );
console.log( duplicate );
alert(`El arreglo a duplicar es: ${numbers} 
La solucion es: ` + duplicate.join(","));
}
duplicar();