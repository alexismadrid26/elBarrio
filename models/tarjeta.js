var mongoose = require("mongoose");

var esquema = new mongoose.Schema(
    {
        numeroTarjeta : String,
        ccv : String,
        fechaVencimiento : String,
    }
);
module.exports = mongoose.model('tarjetas',esquema);