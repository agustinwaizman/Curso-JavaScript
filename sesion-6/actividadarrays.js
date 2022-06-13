// - Una variable que contenga la lista de la compra (mínimo 5 elementos) - Modifica la lista de la compra y añádele "Aceite de Girasol"
const listaCompras = ["pan", "azucar", "cafe", "carne", "arroz", "pastas"];
listaCompras.push("aceite de girasol");
console.log(listaCompras);

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompras.pop();
console.log(listaCompras);

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
    {nombre: "Iron Man: el hombre de hierro", director: "Jon Favreau", fecha: "2008-04-20"},
    {nombre: "Spiderman: no way home", director: "Jon Watts", fecha: "2021-12-17"},
    {nombre: "Fragmentado", director: "M. Night Shyamalan", fecha: "2016-12-26"}
]

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculasNuevas = peliculas.filter(peli => peli.fecha > "2010-01-01");
console.log(peliculasNuevas);

//  Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculas.map(peli => peli.director);
console.log(directores);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculas.map(peli => peli.nombre);
console.log(titulos);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const titulosydirectores = directores.concat(titulos);
console.log(titulosydirectores);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const propagtitydir = [...directores, ...titulos];
console.log(propagtitydir);