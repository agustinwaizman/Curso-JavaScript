// import {suma, eleva, nombre} from "./modulos/mate.js";
import * as moduloMate from './modulos/mate.js'
import getAutor from './modulos/literatura.js';

const sum = moduloMate.suma(4, 10);
console.log(sum)

const potencia = moduloMate.eleva(2, 21)
console.log(potencia)

console.log(moduloMate.nombre)
console.log(getAutor())