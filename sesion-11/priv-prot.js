class Persona {
    //Private -> #
    //Private -> solo se puede acceder desde dentro de la clase
    #nombre;
    #edad;

    //protected -> _
    // solo se puede acceder desde dentro de la clase y desde clases descendientes
    _isDeveloper = true;
    constructor(nombre, edad, isDeveloper){
        this.#nombre = nombre;
        this.#edad = edad;
        this.isDeveloper = isDeveloper;
    }

    saludo(name){
        console.log(`hola ${name}`)
    }
    obtenNombre() { 
        return this.#nombre
    }
    #obtenEdad(){
        return this.#edad
    }
}

const persona = new Persona("Agustin", 24, true);
// console.log(persona)
// console.log(persona.nombre)
persona.saludo("Messi");


console.log(persona.obtenNombre())
console.log(persona.obtenEdad())
console.log(persona._isDeveloper)