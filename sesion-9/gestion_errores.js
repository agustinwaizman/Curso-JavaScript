const miFuncion = val => {
    if (typeof val === "number"){
        return 2 * val
    }
    throw new Error("el valor debe ser de tipo numero")
}

// console.log(miFuncion("casa"))
const numero = 8;

try{
    // codigo que puede fallar
    const doble = miFuncion(numero)
    console.log(doble)
    console.log("se esta ejecutando el programa")
} catch(e){
    // en caso de que falle quiero que ejecutes esto
    console.error(`El valor de e es: ${e}`)
    console.error("ALGO ANDA MAL!")
} //finally {
//     console.log("esto se ejecuta siempre")
// }

// errores mas comunes:
// InternalError, SyntaxError, TypeError, RangeError y ReferenceError