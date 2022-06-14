const logger = require('./logger')

// logger.log("Hola, estoy saliendo por pantalla");
// logger.info("Hola, esto es un mensaje informativo");
// logger.debug("esto es un msj de debug");
// logger.warn("esto es una advertencia");
// logger.error("Hola esto es un error");
const miFuncion = val => {
    if (typeof val === "number"){
        return 2 * val
    }
    throw new Error("el valor debe ser de tipo numero")
}
const numero = "hola";

try{
    const doble = miFuncion(numero)
    logger.info(doble)
    logger.info("se esta ejecutando el programa")
} catch(e){
    logger.error(`El valor de e es: ${e}`)
    logger.error("ALGO ANDA MAL!")
}