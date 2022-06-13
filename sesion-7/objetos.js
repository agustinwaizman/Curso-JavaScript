// trabajando con objetos
const obj = {
    id: 4,
    nombre: "Agustin",
    apellido: "Waizman",
    isDeveloper: true,
    libros_favoritos: ["el hobbit", "el señor de los anillos"],
    "4-juegos":[1, 2, 3, 4]
}

console.log(obj["4-juegos"]);
console.log(obj.id);
console.log(obj.nombre)

const prop = "isDeveloper"
console.log(obj[prop]);

// replicar el objeto

// const obj2 = obj;
// console.log(obj2);

// de esta manera esta guardandose en el mismo espacio de memoria por lo tanto altera al objeto original

// obj2.nombre = "Pablo";
// console.log(obj2.nombre);
// console.log(obj.nombre);

let val1 = 4
let val2 = val1;

val2 = 6;
console.log(val1)
console.log(val2)

const obj3 = { ...obj }
console.log(obj.nombre)
console.log(obj3.nombre)

obj3.nombre = "Agustin"

console.log(obj.nombre)
console.log(obj3.nombre)


// Como ordenar listas de objetos en funcion de una propiedad
const listaPeliculas = [
    {titulo: "Lo que el viento se llevo", anyo: 1939},
    {titulo: "Titanic", anyo: 1997},
    {titulo: "Moana", anyo: 2016},
    {titulo: "El efecto mariposa", anyo: 2004},
    {titulo: "TED", anyo: 2012}
];
console.log(listaPeliculas);
// .sort() -> MUTA EL VALOR DEL ARRAY ORIGINAL

listaPeliculas.sort((a, b) => a.anyo - b.anyo) //MUY UTILIZADO !IMPORTANTE
console.log(listaPeliculas)