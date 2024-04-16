// Crea un programa que permita al usuario ingresar las notas de un estudiante en cinco asignaturas.
// Almacena las notas en un arreglo. Calcula el promedio de las notas y determina si el estudiante
// aprobó o reprobó el curso (aprobando con un promedio mayor o igual a 3.0). Imprime en la
// consola el promedio, la clasificación final (aprobado o reprobado) y todas las notas utilizando los
// métodos de impresión adecuados.
let notas =  [];
let acumNotas = 0;
let promedio;
let etica = Number(prompt("escribe la nota"));
let religon = Number(prompt("escribe tu nota"));
let mate = Number(prompt("escribe tu nota"));
let spanish = Number(prompt("Escribe tu nota"));


notas.push(etica,religon,mate,spanish);
for(let i = 0; i<notas.length; i++){
    acumNotas += notas[i];
    promedio = acumNotas/notas.length;
}
console.group("notas");
console.log(notas);
console.groupEnd();
console.log(`promedio es: ${promedio}`);



if(promedio >= 3){
    console.log("aprobó")
}else{
    console.log("reprobó")
}

