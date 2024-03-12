console.log("Ejercicio 5."); 
let gente1 = ["María", "Dani", "Luis", "Juan", "Camila"];
let gente = ["María", "Dani", "Luis", "Juan", "Camila"];

/*
6. Usando un bucle, repita esta matriz y después de console.log "Maria", salga del bucle.
7. Escribe el comando que da el indexOf donde se encuentra "Maria".
Al final del ejercicio, debería haber 4 personas en la formación.
*/
const copyOfName =  gente.slice(); 

alert(`La lista es: [ ${gente1}]`);

console.log("Eliminando a Dani: " + gente.splice(1,1)); //
console.log(gente);
alert(`La lista es: [ ${gente1}]
La lista sin Dani es: [ ${gente}]`);

console.log("Eliminando a Juan: " + gente.splice(2,1)); //
console.log(gente);
alert(`La lista sin Juan es: [ ${gente}]`);

const copyOfNames = gente.splice(1,1);
gente.unshift("Luis");

alert(`La lista con Luis al principio es: [ ${gente}]`);

gente.push("Jocelyn");
alert(`La lista con mi nombre al final es: [ ${gente}]`);

romperTablaCompleta: //Uso de label 
for (let index = 1; index <=gente.length; index++) {
        if(index==="Maria" && index==="Maria") break romperTablaCompleta; //el break nomb_label rompe con el ciclo en el que esta antes el label
        console.log(`${index} `);
    }   

    alert(`La lista final es: [ ${gente}]`);