/*Este módulo deberá contener una función que lea el contenido del archivo "data.txt" y lo almacene en una variable*/

const fs = require('fs');

function leer(path) {
   const data = fs.readFileSync(path, 'utf-8');
   return data;
}

module.exports = {
    leer: leer
};


