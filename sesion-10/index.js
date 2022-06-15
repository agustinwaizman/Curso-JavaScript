// formas de importar/exportar modulos
// 1. CommonJS - require
// 2. Import ES6 - import

// const moduloMate = require("./modulos/mate.js")
// const factorial = moduloMate.factorial;
// const { factorial } = moduloMate;
// const suma = moduloMate.suma;
// console.log(moduloMate)
const { factorial, suma } = require("./modulos/mate.js")

const fact = factorial(10);
console.log(fact);

const sum = suma(12, 30);
console.log(sum)