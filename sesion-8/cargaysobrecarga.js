// carga y sobrecarga de funciones
function saludar(par){
    hola(par)
}
function hola(nombre){
    console.log(`Hola! como estas, ${nombre}?`)
}

saludar("Agustin")

// 1. global()
// 2. saludar() global()
// 3. hola() saludar() global()
// 4. saludar() global()
// 5. global()

// function recursivo(){
//     recursivo()
// }
// recursivo()