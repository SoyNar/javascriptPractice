// //Crea una variable que almacene un arreglo de frutas. Recorre el arreglo e imprime en la consola
// cada fruta utilizando el método log. Luego, clasifica las frutas en dos categorías (cítricas y no
//     cítricas) y crea dos nuevos arreglos para almacenarlas. Imprime ambos arreglos en la consola
//     utilizando el método table.

let noCritricas = ["Mango", "pera", "Manzana", "uva"];
let citricas = ["mandarina", "naranja", "mango"];


for(let i= 0; i<noCritricas.length; i++){
    
    console.log(noCritricas[i]);
   
}

console.group("no citricas");
console.log( noCritricas);
console.groupEnd();

console.group("Citricas");
console.log(citricas);
console.group();

