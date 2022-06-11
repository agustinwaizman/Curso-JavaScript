// Una cadena de texto con tu Nombre
nombre = "Agustin";
console.log(nombre);

// Otra cadena de texto con tu Apellido
apellido = "Waizman";
console.log(apellido);

// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
estudiante = nombre + " " + apellido;
console.log(estudiante);

// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
numLetrasEstudiante = estudiante.length;
console.log(numLetrasEstudiante);

// Una variable que contenga la primera letra del Nombre
primeraLetra = nombre.charAt(0);
console.log(primeraLetra);

// Otra variable que contenga la última letra del Apellido
ultimaLetra = apellido.charAt(6);
console.log(ultimaLetra);

// Una cadena de texto que elimine los espacios de la variable "estudiante"
sinEspacios = estudiante.replace(/ /g, "");
console.log(sinEspacios);

// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
apareceNombre = estudiante.includes("Agustin");
console.log(apareceNombre);
