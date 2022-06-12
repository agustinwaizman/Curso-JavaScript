// Como trabajar con arrays
let var1 = 30
let array = [1, 2, 3, 6, "pedro", true, "Agustin", [1.2, 3, "Micaela", var1]];
console.log('array :>> ', array);

// Acceder a los valores de un array a traves de su posicion
// array[indice]
console.log(array[0]);
console.log(array[7]);
console.log(array[3]);

// metodos para introducir nuevos valores en nuestro array
// .push() .unshift() => mutan el valor de nuestro array
// valores al final -> .push()
array.push("final", 109, false);
console.log(array)

// valores al principio -> .unshift()
array.unshift("Bienvenido");
console.log(array);

// metodos para eliminar valores en nuestros array
// .pop() .shift() -> mutan el valor del array
// valores al final -> .pop()
array.pop();
console.log(array);

// valores al principio -> shift
array.shift(array);
console.log(array);

// metodo para eliminar, modificar o añardir valores en nuestro array
// .splice(x, y, z)
const array2 = [1, 2, 3, 4, 5, 6];

// eliminar valores .splice(indice, nro de valores a eliminar)
array2.splice(0, 2);
console.log(array2);

// añadir valores .splice(indice, 0, valores)
array2.splice(3, 0, "Agustin")
console.log(array2)

// Modificar valores (indice, 1, valores)
array2.splice(2, 1, "yafue")
console.log(array2)