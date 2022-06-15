// inheritance - herencia
class Persona {
    _nombre
    _edad
    constructor(nombre, edad){
        this._nombre = nombre;
        this._edad = edad;
    }

    saludo(name){
        console.log(`hola ${name}`)
    }
}
class Developer extends Persona{
    constructor(nombre, edad, lenguaje){
        super(nombre, edad)
        this.lenguaje = lenguaje
    }
    saludo(name){
        super.saludo(name)
        console.log(`yo soy desarrollador de ${this.lenguaje}`)
    }
}
const nuevodev = new Developer("Agustin", 24, "javascript")
nuevodev.saludo("Jackson")

// polimorfismo => varias formas
