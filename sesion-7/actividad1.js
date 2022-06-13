// - Un nuevo Set con los nombres de tu familia
const miFamilia = new Set(["Micaela", "Fernanda", "Juan", "Florencia", "Martin", "Anahi", "Ide", "Aaron", "Jeremias", "Benjamin", "Agustin"]);
console.log(miFamilia);

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
miFamilia.add("Agustin");
console.log(miFamilia);

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
miFamilia.add("JavaScript");
console.log(miFamilia);