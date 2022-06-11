let texto_largo = "Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, cuando un impresor desconocido tomó una galera de tipos y la codificó para hacer un libro de muestras tipográficas. Ha sobrevivido no solo cinco siglos, sino también el salto a la composición tipográfica electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de hojas de Letraset que contenían pasajes de Lorem Ipsum y, más recientemente, con software de autoedición como Aldus PageMaker, que incluía versiones de Lorem Ipsum."
// metodo para saber cuantas veces se repite una palabra
console.log(texto_largo.match(/de/g))
// metodo para saber si una palabra se incluye dentro del texto
console.log(texto_largo.includes("década"))

// metodo para saber si un texto comienza con una palabra
console.log(texto_largo.startsWith("Lorem"))

//metodo para saber si un texto termina con una palabra 
console.log(texto_largo.endsWith("."))