console.log("Ejercicio 6"); 

let bubbleAlgorithm = [3, 6, 12, 5, 100, 1];

function algorithmBubble(items) {
    let length = items.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < (length - i - 1); j++) {
        if (items[j] > items[j + 1]) {
          let organized= items[j];
          items[j] = items[j + 1];
          items[j + 1] = organized;
        }
      }
    }
  }
const copyOfbubble =  bubbleAlgorithm.slice(); 
alert(`El arregoo original es: ${bubbleAlgorithm}`);
algorithmBubble(bubbleAlgorithm);
alert(`El arreglo ordenado por algotitmo de burbuja es: ${bubbleAlgorithm}`);
