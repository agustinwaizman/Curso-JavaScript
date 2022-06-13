// .sort()
const array = [3, 1, 50, 14, 23, 5, 7, 93, 129]

console.log(array)

array.sort((a, b) => {
    if (a < b){
        return -1;
    } else if (a > b){
        return +1;
    } else {
        return 0;
    }
})

console.log(array);

// ordenar unicamente arrays numericos
const arrayNumerico = [2, 3, 51, 21, 3902, 1, 56];

arrayNumerico.sort((a,b) => b - a);
console.log(arrayNumerico);

// en arrays de objetos 
const listaObjetos = [
    {nombre: "Agustin", edad: 23},
    {nombre: "Lautaro", edad: 24},
    {nombre: "Micaela", edad: 20},
    {nombre: "Miguel", edad: 25},
    {nombre: "Pablo", edad: 29},
    {nombre: "Paulo", edad: 12},
    {nombre: "Milagros", edad: 17},
    {nombre: "Rodrigo", edad: 15},
    {nombre: "Lucia", edad: 16},
    {nombre: "Luciano", edad: 14}
]

// listaObjetos.sort((a, b) =>{
//     if (a.edad < b.edad){
//         return -1;
//     } else if (a.edad > b.edad){
//         return +1;
//     } else {
//         return 0;
//     }
// })

listaObjetos.sort((a, b)=>a.edad - b.edad);
console.log(listaObjetos)