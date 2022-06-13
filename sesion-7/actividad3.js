// - La fecha de hoy
const fechahoy = new Date()

// - La fecha de tu nacimiento
const fechanac = new Date("June 20, 1998 08:00:00")

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const tarde = fechahoy.getTime() > fechanac.getTime();

// - Una variable que contenga el día de tu nacimiento
const dia = fechanac.getDate();

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mes = fechanac.getMonth()+1;

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anyo = fechanac.getFullYear();

console.log(tarde)
console.log(dia)
console.log(mes)
console.log(anyo)