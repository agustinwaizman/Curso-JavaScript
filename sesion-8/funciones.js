// que son las funciones, como se declaran y como se utilizan
const nombre = "Agustin Waizman"

saludar(nombre)
function saludar(parametro){
    console.log(`hola ${parametro}`);
}

////
let nombre_2 = "Juan"
console.log(nombre_2)

despedir(nombre_2)
console.log(nombre_2)

function despedir(nombre){
    nombre = "Diego"
    console.log(`adios ${nombre}`);
}

////
let persona = {nombre: "Juan", apellido: "Gonzalez"}

function saludarPersona(obj){
    obj.apellido = "Waizman"
    obj.nombre = "Agustin"
    console.log(`hola ${obj.nombre} ${obj.apellido}`)
}
saludarPersona(persona)

//////////////

function imprimeNumero(numero = 9){
    console.log(numero);
}

imprimeNumero()

///////////////
function imprimir(...parametros){
    console.log(parametros);
}
imprimir(34, 2342, 12319, 43)

//////////////
function suma(...numeros){
    return numeros.reduce((a, b) => a + b);
}

const s = suma(1, 2, 3, 4, 1)
console.log(s)
////////////////
let variable = "Holis"

function multiplicar(a = 0, b = 0){
    console.log(variable);
    let varint = "adios";
    console.log(varint)
    return a * b;
}

console.log(multiplicar(5, 9))
