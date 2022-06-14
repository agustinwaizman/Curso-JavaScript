// - Una función sin parámetros que devuelva siempre "true"

function verdadero(){
    return true;
}
const ver = verdadero()
console.log(ver)

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

function conseguirPromesa(){
    return new Promise ((res, rej) => {
        console.log("cargando...");
        setTimeout(() => {
            res(true);
            console.log("Hola, soy una promesa");
        }, 5000);
    })
}

await conseguirPromesa()

// - Una función generadora de índices pares automáticos
function* generarPares(){
    let id = 0;
    while(true){
        id = id + 2;
        if (id === 20){
            return id
        }
        yield id
    }
}
const par = generarPares();

console.log(par.next().value)