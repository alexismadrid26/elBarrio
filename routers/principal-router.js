var express = require("express");
// var session = require("express-session");
var router = express.Router();
var usuario = require("../models/usuario");
var proyecto = require("../models/proyecto");
// var mongoose = require("mongoose");

router.get("/", function (req, res) {
    if (req.session.codigoUsuario == "Admin.0000") {
        res.send({nombre: "Admin", apellido: ""});
    } else {
        usuario.find({ _id: req.session.codigoUsuario })
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                res.send(error);
            });
    }

});


module.exports = router;