// como comparar listas
//  .every()
const array = [2, 675, 12, 60, 53, 75, 10, 5];

// const resultado = array.every(valor => {
//     if (typeof valor === "number"){
//         return true;
//     } else {
//         return false;
//     }
// })
const resultado = array.every(val => typeof val === "number");

console.log(resultado)

// comparacion de listas
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];

console.log(arr1 === arr2);

// const compararArrays = (arr1, arr2) =>{
//     if (arr1.lenght !== arr2.lenght) return false;
//     const res = arr1.every((val, i) =>{
//         if (val === arr2[i]) return true
//         return false
//     })
// }

const compararArrays = (arr1, arr2) =>{
    if (arr1.length !== arr2.length) return false;
    const res = arr1.every((val, i) => val === arr2[i])
    return res;
}

console.log(compararArrays(arr1, arr2))