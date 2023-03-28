/* Este módulo deberá contener una función que tome una cadena de texto como parámetro y la escriba en el archivo "data.txt"*/

const fs = require('fs');

function escribir(texto, path) {
    fs.appendFileSync(path, texto);
}

module.exports = {
    escribir: escribir
};
