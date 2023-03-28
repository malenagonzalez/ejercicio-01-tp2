
const path = './data.txt';
const moduloUno = require('./moduloUno.js');
const moduloDos = require('./moduloDos.js');

let texto = moduloUno.leer(path);

moduloDos.escribir("Agregado: " + texto, path);

console.log(moduloUno.leer(path));