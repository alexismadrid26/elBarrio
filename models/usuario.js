var mongoose = require("mongoose");

var esquema = new mongoose.Schema(
    {
        nombre : String,
        apellido : String,
        nombreUsuario : String,
        correo : String,
        contrasenia : String,
        genero : String,
        fechaNacimiento : String,
    }
);
module.exports = mongoose.model('usuarios',esquema);
