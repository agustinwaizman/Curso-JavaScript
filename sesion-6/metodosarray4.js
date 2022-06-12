// metodos mas avanzados
// .map() .filter() .reduce()

const array = ["Buenos Aires", "Mendoza", "Cordoba", "Resistencia", "Salta"];

const val = array.forEach(v =>{
    console.log(v)
})
console.log(val)

const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`);
console.log(newArray);

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

// const personasMayores = listaObjetos.filter(obj => {
//     if (obj.edad > 18){
//         return true;
//     } else {
//         return false;
//     }
// })
const personasMayores = listaObjetos.filter(obj => obj.edad > 18)
console.log(personasMayores)

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Pablo");
console.log(nuevaLista)

// .reduce() obtener un solo objeto a partir de una lista
const valores = [23, 24, 20, 25, 29, 12, 17, 15, 16, 14];
const suma = valores.reduce((ant, cur, i, arrayOriginal) => {
    console.log(ant)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return ant + cur
})