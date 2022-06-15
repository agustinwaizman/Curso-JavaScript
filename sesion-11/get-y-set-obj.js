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
    obtenNombre() { // Func getter -> nos permite acceder de forma controlada a algun atributo protegido
        return this.#nombre
    }
    #obtenEdad(){
        return this.#edad
    }
    getEdad(){
        return this.#edad
    }
    setEdad(nuevaedad){
        this.#edad = nuevaedad;
    }
}

const persona = new Persona("Agustin", 24, true);
// console.log(persona)
// console.log(persona.nombre)
persona.saludo("Messi");

// console.log(persona.obtenNombre())
// console.log(persona.obtenEdad())
// console.log(persona._isDeveloper)

//getter -> metodos que nos permiten obtener atributos/metodos privados o protegidos
const edad = persona.getEdad();
console.log(edad)

//setter -> metodos que nos permiten cambiar el valor de alguno de los atributos privados o protegidos
// para cambiar la edad de la persona
persona.setEdad(25);
const nueva_edad = persona.getEdad()
console.log(nueva_edad)