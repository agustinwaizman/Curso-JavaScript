const boton = document.querySelector("#btn")

// console.log(boton)

boton.addEventListener("click", () => {
    // alert("click")
    // confirm("¿seguro?") && console.log('ok');
    confirm("¿seguro?") 
    ? console.log('ok')
    : console.log('no ok!')
//     const respuesta = confirm("¿seguro?")
//     if (respuesta){
//         console.log("estas de acuerdo")
//     } else {
//         console.log("no estas de acuerdo")
//     }
})

const botonInfo = document.querySelector("#info")
botonInfo.addEventListener("click", () => {
    const nombre = prompt("¿cual es tu nombre?")
    if(nombre){
        console.log("tu nombre es " + nombre)
    } else {
        console.log("no has introducido nada")
    }
})

const lista = [{
    nombre: "Agustin",
    edad: 24
}, {
    nombre: "Micaela",
    edad: 21
}, {
    nombre: "Matias",
    edad: 24
}]

// console.log(lista)
console.table(lista)