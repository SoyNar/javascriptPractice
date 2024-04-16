// Crea un programa que solicite al usuario su edad y, en función de la edad ingresada, muestre un
// mensaje personalizado utilizando los métodos de impresión adecuados. Por ejemplo, si el usuario
// es menor de 18 años, muestra un mensaje indicando que es menor de edad. Si tiene entre 18 y 24
// años, muestra un mensaje de bienvenida a la juventud. Si tiene 25 años o más, muestra un
// mensaje genérico de saludo.


let edad;
edad= Number(prompt("ingrese su edad en numeros: "));

if(edad<18 & edad >0){
    console.log("Menor de edad");
}else if(edad> 18 & edad <=24){
    console.log("Bienvenido a la juventuda");
}else if(edad > 25 & edad < 101){
    console.info("Hola, Bienvenidx");
}else{
    console.error("ingrese una edad valida");
}
