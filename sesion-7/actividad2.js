// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const yop = {
    nombre: "Agustin",
    apellido: "Waizman",
    edad: 24,
    altura: 1.75,
    eresDesarrollador: true
}

// - Una variable que obtenga tu edad a partir del objeto anterior
const miEdad = yop.edad;
console.log(miEdad)

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const amiwos = [{
    ...yop
    },{
        nombre: "Lautaro",
        apellido: "Medina",
        edad: 24,
        altura: 1.80,
        eresDesarrollador: false
    },{
        nombre: "Matias",
        apellido: "Ifran",
        edad: 24,
        altura: 1.78,
        eresDesarrollador: false
    }
]
//  Una nueva lista con los objetos de la lista anterior ordenados por altura, de mayor a menor
const orden = amiwos.sort((a, b) => a.altura - b.altura);
console.log(orden)