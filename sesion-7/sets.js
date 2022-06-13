// sets o conjuntos
const array = [1, 2, 3, 4, 5, "hola", {id:5}];

const miSet = new Set(array);
console.log(array)
console.log(miSet)

// .add() para agregar valores
miSet.add(9);
console.log(miSet);
miSet.add("hola");
console.log(miSet);

// .delete() para eliminar un valor en especifico
miSet.delete("hola");
console.log(miSet);

// .clear() eliminar todos los valores de un set
// miSet.clear()
// console.log(miSet)

// .has() para verificar si un valor es parte del set
console.log(miSet.has(3));

// .size para conocer el tamaño de un set
console.log(miSet.size)

miSet.forEach(valor => {
    console.log(valor)
})
const it_miSet = miSet.values()
console.log(it_miSet)

const ar_miSet = [...miSet]
console.log(ar_miSet)