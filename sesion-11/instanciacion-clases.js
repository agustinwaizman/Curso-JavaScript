class Persona {
    nombre;
    edad;
    isDeveloper;
    constructor(nombre, edad, isDeveloper){
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;
    }

    saludo(name){
        console.log(`hola ${name}`)
    }
}

const nueva_persona = new Persona ("Matias", 24, false);
console.log(nueva_persona)
nueva_persona.saludo("Shakira")

let numero = 60 // inicializar
let persona_2 = new Persona("Maria", 34, true) //instanciar

console.log(persona_2 instanceof Persona)
// instanceof -> similar a typeof pero para clases