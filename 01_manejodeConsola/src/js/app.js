// inicializar y declarar
const titleUno = document.getElementById("title");
const inform = document.getElementById("info");

let userName = prompt("enter your name");
var latsName = prompt("Enter your last name");
const email = prompt("Enter you email");
const age = Number(prompt("Enter you age"));
let corder = ["lupe", "Mateo","Maria"];
let address;
let tel = Number(prompt("Enter your phone number"));
let nameCoder;

// crear o declarar

//validar tipo de dato
if ( typeof(age) !== Number){
    console.error("No es un numero");
    console.log(typeof(age));
}



// inicializar

// imprimir en consola
console.group("data");
console.info(userName + " last name: "+ latsName, " age: " + age + "email: " + email);
console.info(userName, "last name:",latsName,"age:", age, "email:", email);
console.log(`Name: ${userName} last name: ${latsName} Age: ${age} Address: ${address} email: ${email}`);
console.groupEnd();

//para separar datos
console.group("Data contac");

console.log(`Address: ${address}`);
console.log(`email: ${email}`);
console.log("telefono: " +tel);
console.groupEnd();

console.warn("este es un mensaje de Advertencia");
console.error("esto es un Error");
console.debug("Enviar mensajes para mi");

//imprimi lista
console.log(corder);
console.table(corder);


//arrays,objetos

//imprimir alert

//  alert(`%c${userName}`, "background-color:#00ffff")
//  alert()
 

// titleUno.innerHTML = email;
// inform.innerHTML = `name: ${userName} last Name: ${latsName} email: ${email} Age: ${age}`


// calculado Basica


