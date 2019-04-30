var mongoose = require("mongoose");

var esquema = new mongoose.Schema(
    {
        tipoMembresia : String,
        precio : Number,
        almacenamiento : String,
        fechaInicio : String,
    }
);
module.exports = mongoose.model('membresias',esquema);