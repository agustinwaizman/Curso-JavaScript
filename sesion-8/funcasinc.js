// funciones asincronas
function async(){
    // hace una llamada a una bd externa
    // puede darnos algun error
}

const promise = new Promise((res, rej) =>{
    const i = Math.floor(Math.random() * 2)
    // si esta todo ok
    if (i !== 0){
        res()
    } else{ // si hay error
        rej()
    }
})

promise
    .then(() => console.log("Se ha ejecutado de forma correcta"))
    .catch(() => console.log("Error"))
    .finally(() => console.log("Yo toy siempre"))

// async await