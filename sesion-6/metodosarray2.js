// como unir dos listas .concat(lista2)
const lista1 = ["hola", "agustin", 3.14, 209, false];
const lista2 = [20, 309, true, "mica", "tinitini"];

console.log(lista1.concat(lista2));
console.log(lista1);

const lista3 = lista1.concat(lista2);
console.log(lista3);

// como unir dos listas con el factor de propagacion
console.log(...lista1);
const lista4 = [...lista1, ...lista2];
console.log(lista4);

// Error!! mal entendido en el concepto del factor de propagacion
const lista5 = [lista1, lista2];
console.log(lista5);
// ------------------------------------------------------------------------------------------------------------>
// Como obtener una lista a partir de otra .slice()
const array = ["hola", 1, 2, 3, true, null, "good"];

// el metodo slice no modifica el valor del array original
console.log(array.slice(2,6));
const array2 = array.slice(2, 6);
console.log(array2);

const array3 = array.slice(2, -2);
console.log(array3);