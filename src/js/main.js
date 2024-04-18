let numero1 = 10;
let numero2= 14;
let gradosCelsius= 100;
let numeroAleatorio = Math.floor(Math.random()*10 -1 +1);
let pi = 3.14;
let array = [4,10,55,65,78,92,12,3];



// Sumar dos números.

let sumar = function (numero,dos){
    return numero + dos;
}

console.log(sumar(numero1,numero2));




// 2. Restar dos números.
function restaNumeros(uno,dos){
    return uno - dos;
}
console.log(`restar: ${restaNumeros(numero1,numero2)}`);

// 3. Multiplicar dos números.

let multiplicarNumeros = (uno, dos) =>{
    return uno * dos;
}
console.log(` multiplicacion: ${multiplicarNumeros(numero1,numero2)}`)
// 4. Dividir dos números.
let dividirNumeros = function(uno,dos){
    return uno / dos;
}
console.log(dividirNumeros(numero1,numero2));
// 5. Calcular el módulo (resto) de una división.
 let calcularModulo = (uno,dos) => {
   return uno % dos;
 }
 console.log(calcularModulo(numero1,numero2));

// 6. Generar un número aleatorio entre 1 y 10.
console.log(numeroAleatorio);

// 7. Elevar un número a la potencia de otro.
   Math.exp(5);
// 8. Calcular la raíz cuadrada de un número.
Math.sqrt(4);
// 9. Convertir grados Celsius a Fahrenheit.
function convertirGrados(grados){
     return (grados*1.5)+32;
}
console.log(`celsius a farenhei: ${convertirGrados(gradosCelsius)}`);
// 10.Calcular el área de un círculo.
let calcularAreaCirculo = (radio) => {
    return pi * radio;
}
console.log(` area del circulo${calcularAreaCirculo(12)}`);
// 11.Calcular el perímetro de un cuadrado.
 
let calcularAreaCuadrado = (lado) => {
    return lado * lado;
}
console.log(`area cuadrado: ${calcularAreaCuadrado(15)}`);

// 12.Calcular el volumen de una esfera.
let calcularVolumenEsfera = (radioEsfera) => {
    return (4/3)*(pi)*(radioEsfera);
}
console.log(`volumen Esfera: ${calcularVolumenEsfera(66)}`);


// 13.Calcular el área de un triángulo.

// 14.Generar la tabla de multiplicar del número 5.
function tablaDeMultiplicar(){
    acum = 5;
    for(let i = 1; i<=10; i++){   
    acum *= i;
    console.log(acum);
       
    }
} tablaDeMultiplicar();


// 15.Encontrar el número mayor entre 3, 7 y 2.
let encontraMayor = (array) =>{
    return Math.max(...array);
}
console.log(`numero Maximo: ${encontraMayor(array)}`);

// 16.Encontrar el número menor entre 10, 20 y 5.
console.log(`numero minimo:${Math.min(10,6,25)}`);

// 17.Calcular el promedio de 4, 6 y 8.

let calcularPromedio = (uno,dos,tres) =>{
    return (uno+dos+tres)/3;
}
console.log(`promedio: ${calcularPromedio(4,6,8)}`);