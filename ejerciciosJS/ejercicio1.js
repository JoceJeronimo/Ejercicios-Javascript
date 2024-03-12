console.log("Ejercicio 1:"); 

/**
* Copy the code below into your workspace:
*let arr = ["This", "is", "a", "sentence."];
*function printOutString() {
*  // your code here
*}
*
*printOutString();
*Complete the function to print out the string: This is a sentence.

 */
let arr = ["This", "is", "a", "sentence."];

function printOutString() {
    const arreglo = []; 
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
            arreglo.push(element);
        
    }
    console.log(arreglo.join(" ")); // imprime en consola 
    alert("La solucion es: " + arreglo.join(" ")); // imprime en un alert 
}

printOutString();
