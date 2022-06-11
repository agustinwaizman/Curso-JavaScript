// principales operaciones aritmeticas
let a = 3.5
let b = 4.8
// suma (+)
console.log(a + b);
// resta (-)
console.log(a - b);
// multiplicacion (*)
console.log(a * b);
// division (/)
console.log (a / b);

// representacion de los numeros en los strings
console.log(typeof a);
let a_s = a.toString();
console.log(a_s)
console.log(typeof a_s)

// redondeo de numeros decimales
let c = 3.3;
let d = c * 3;
console.log(d);
console.log(typeof d);

//.toFixed(x) - limita el numero de decimales al valor x pero lo convierte a string..
console.log(d.toFixed(4));
console.log(typeof d.toFixed(4))

let e = 1839.123456789;
let f = 213214245252;
console.log(e.toFixed(2));
console.log(f.toFixed(2));

//.toPresision(x) - Limita el numero de cifras significativas
console.log(e.toPrecision(7))