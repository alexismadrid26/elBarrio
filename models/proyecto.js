var mongoose = require("mongoose");

var esquema = new mongoose.Schema(
    {
        nombre : String,
        descripcion : String,
        fecha : String,
        tamanio : String,
        carpeta : {},
        tamanio : String,
    }
);
module.exports = mongoose.model('proyectos',esquema);