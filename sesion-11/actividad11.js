class Estudiante{
    nombre
    asignaturas
    constructor(nom, asig){
        this.nombre = nom;
        this.asignaturas = asig;
    }
    obtenDatos(){
        console.log(this.nombre)
        console.log(this.asignaturas)
    }
}

const nuevoestudiante = new Estudiante("Agustin", ["JavaScript", "HTML", "CSS"])
nuevoestudiante.obtenDatos()