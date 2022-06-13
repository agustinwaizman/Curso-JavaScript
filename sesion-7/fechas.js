//  trabajando con fechas
const fecha = new Date()
console.log(fecha)

// LOS MESES INICIALIZAN EN 0 POR LO TANTO ENERO = 0
const fecha2 = new Date(1998, 05, 20, 18, 30, 58);
console.log(fecha2);

// inicializar a traves de los milisegundos
const fecha3 = new Date(1655139589123)
console.log(fecha3)

const fecha4 = new Date("June 13, 2022 13:45:23")
console.log(fecha4)

console.log(fecha < fecha2)

const fecha5 = new Date(1998, 05, 20, 18, 30, 58);
console.log(fecha5)

console.log(fecha2 === fecha5) //no se pueden comparar fechas de esta manera

console.log(fecha2.getTime() === fecha5.getTime()); //manera correcta de comparar igualdad entre fechas

// //// obtener el dia, el mes y el año de una fecha
// obtener el dia = .getDate()
console.log(fecha2.getDate())

// obtener el mes.getMonth()
console.log(fecha2.getMonth()+1);

// obtener el año .getFullYear()
console.log(fecha2.getFullYear())

// mostrar una fecha en un string .toLocaleDateString
// se puede adaptar al idioma en el que se va a mostrar
console.log(fecha2.toLocaleDateString('es-AR'))
