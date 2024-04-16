// Crea un juego de adivinanzas donde el usuario deba intentar adivinar un número secreto generado
// aleatoriamente. Proporciona pistas al usuario indicando si su suposición es mayor, menor o igual al
// número secreto. Utiliza los métodos log, warn y error para imprimir mensajes informativos al
// usuario durante el juego.

let numeroSecreto = Math.floor(Math.random() * 10);
let numeroUser;
let intentos = 0;
alert("tienes 3 intentos")
while (numeroUser !== numeroSecreto) {
  intentos++;
 
  numeroUser = Number(prompt("escribe un numero del 1 al 10"));
  if (numeroUser === numeroSecreto) {
    alert("Bien, Ganaste");
    break;
  } else if (numeroUser > numeroSecreto) {
    alert("EL numero es menor");
  } else {
    alert("El numero es mayor");
  }

  if (intentos == 3) {
    alert(`Perdiste: tuviste ${intentos}, Hasta pronto`);
    break;
  }
}
// console.log(numeroSecreto)
// numeroUser = Number(prompt("Escribe un numero"));
// if (numeroUser !== numeroSecreto){
//     console.log("perdiste");

// }else{
//     console.log("Ganaste");
// }
