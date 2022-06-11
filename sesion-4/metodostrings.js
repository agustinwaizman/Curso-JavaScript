let input = "Agustin"
let bd = "agustin"

// toLowerCase() - toUpperCase()

console.log(input.toLowerCase() === bd.toLowerCase())
console.log(input.toUpperCase() === bd.toUpperCase())
console.log(input.toUpperCase())
// formas de concatenar dos cadenas de caracteres
let str1 = "Hola, soy la primer cadena. "
let str2 = "hola, soy la segunda cadena."

console.log(str1.concat(str2))
console.log(str1 + str2)
console.log(`${str1} ${str2}`)

// eliminar espacios al inicio y al final
let str3= "        hola soy un string re espaciado        "
console.log(str3.length)
//trim()
console.log(str3.trim().length)
console.log(str3.trimStart().length)
console.log(str3.trimEnd().length)

//obtener el caracter que hay en cierta posicion
let str4 = "hola soy el string numero 4"

console.log(str4.charAt(5))
console.log(str4[5])

//obtener la posicion de una palabra dentro de una cadena de caracteres
let str5 = "Hola soy Agustin y me gusta el Agustin"
console.log(str5.indexOf("Agustin"))
console.log(str5.charAt(9))
console.log(str5.lastIndexOf("Agustin"))