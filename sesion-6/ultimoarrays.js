// .some()
const array = [2, 5, 634, 22, 12, 546, 232, -42];

const res = array.some(valor => valor < 0)

console.log(res)

const existe = array.some(valor => valor === 634);

console.log(existe)

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
const existeAgustin = listaObjetos.some(persona => persona.nombre === "Agustin");
console.log(existeAgustin)

// como obtener una lista a partir de un objeto iterable
const str = "Hola, soy Agustin";
console.log(str[12]);

const ar_str = Array.from(str);
console.log(ar_str);

const set = new Set([2, 3, "hola", 4]);
const ar_set = Array.from(set);
console.log(ar_set);

const keys = array.keys()
console.log(keys)

const ar_keys = Array.from(keys)
console.log(ar_keys)