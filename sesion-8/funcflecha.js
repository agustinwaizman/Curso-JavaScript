// funciones tipo flecha - funciones anonimas

const array = [1, 5, 3, 67, 143, 12, 9]

const array2 = array.map((valor) => valor * 2)

console.log(array2);

// const dobleDelValor = valor => {
//     return valor * 2;
// }

const dobleDelValor = valor => valor * 2;
console.log(dobleDelValor(2))


console.log(doble(3))
function doble(valor){
    return valor * 2
}
