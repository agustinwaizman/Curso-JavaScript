const persona = {
    nombre: "Agustin",
    edad: 24,
    isDeveloper: true,
    saludo: function(nombre){
        console.log(`hola ${nombre}`)
    }
}

persona.saludo("Pedro")

const otra_persona = {
    nombre: "Miguel",
    edad: 25,
    isDeveloper: false,
    saludo: function(nombre){
        console.log(`hola ${nombre}`)
    }
}
// funcion factory
const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre: nombre,
        edad: edad,
        isDeveloper: isDeveloper,
        saludo: function(name){
            console.log(`Hello ${name}`)
        }
    }
}

const nueva_persona = creaPersona("Juan", 16, false)
console.log(nueva_persona)