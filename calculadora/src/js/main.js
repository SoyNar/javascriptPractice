
let numOne = Number(prompt("escribe un numero"));
let numTwo = Number(prompt("Escribe otro numero"));

function caculadora(numOne, numTwo){
    console.log(` suma: ${ numOne+numTwo} resta: ${numOne-numTwo} multplicacion: ${numOne*numTwo} division: ${numOne/numTwo}`)
}
caculadora(numOne, numTwo);