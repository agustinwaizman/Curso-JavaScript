// Iterar los valores de una lista
const array = ["hola", 2, 5, 3.14, Infinity, null, "Agustin"];
// forma antigua y menos eficiente
for (let i = 0; i < array.length; i++){
    console.log(array[i])
}

// forma ES6 (mas eficiente) .forEach()
let suma = 0;
const arrayNums = [31, 5, 23, 6, 82, 95]
arrayNums.forEach(valor => {
    suma += valor;
    console.log(valor)
})
console.log(suma);

// busqueda de un valor dentro de una lista .find()
// quiero encontrar el elemento 5
const variable = array.find(valor =>{
    if (valor === 5){
        return true
    }
})

console.log(variable)

const listaObjetos = [
    {nombre: "Agustin", edad: 23},
    {nombre: "Lautaro", edad: 24},
    {nombre: "Micaela", edad: 20},
    {nombre: "Miguel", edad: 25}
]
// primera forma de hacerlo
const obj1 = listaObjetos.find(o=>{
    if (o.nombre === "Micaela"){
        return true;
    }
})
console.log(obj1);

// maneras mas eficientes:
const objeto = listaObjetos.find(o => o.nombre === "Agustin");
console.log(objeto.edad);

const {edad} = listaObjetos.find(o => o.nombre === "Agustin");
console.log(edad);