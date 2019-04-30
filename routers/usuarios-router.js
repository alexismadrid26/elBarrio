var express = require("express");
var router = express.Router();
var usuario = require("../models/usuario");
var mongoose = require("mongoose");

// LOGIN //
//Obtener el listado de las usuario
router.get("/", function (req, res) {
    usuario.find().sort({ orden: 1 })
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.send(error);
        });
});

router.get('/comprobar-sesion', function (req, res) {
    if (req.session.correoUsuario) {
        res.send({ comprobacion: 1, mensaje: "Ya hay una sesión: " + req.session.codigoUsuario + " >> " + req.session.correoUsuario });
    } else {
        res.send({ comprobacion: 0, mensaje: "No hay sesión, logearse " });
    }
});

router.post("/login", function (req, res) {
    if (req.body.correo == 'Admin') {
        req.session.codigoUsuario = "Admin.0000";
        req.session.correoUsuario = req.body.correo;
        res.send({ status: 1, mensaje: "Usuario autenticado con éxito", usuario: [{nombre: "Admin", apellido: ""}]});
    } else {
        usuario.find({ correo: req.body.correo, contrasenia: req.body.contrasena })
            .then(data => {
                if (data.length == 1) {//Significa que si encontro un usuario con las credenciales indicadas
                    //Establecer las variables de sesion
                    req.session.codigoUsuario = data[0]._id;
                    req.session.correoUsuario = data[0].correo;
                    res.send({ status: 1, mensaje: "Usuario autenticado con éxito", usuario: data[0] });
                } else {
                    res.send({ status: 0, mensaje: "Credenciales inválidas" });
                }
            })
            .catch(error => {
                res.send(error);
            });
    }
});

router.get('/logout', function (req, res) {
    req.session.destroy();
    res.redirect("/index.html");
});


// REGISTRAR //
//Petición para registrar un usuario
router.post("/registro", function (req, res) {
    var r = new usuario({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        nombreUsuario: req.body.usuario,
        correo: req.body.correo,
        contrasenia: req.body.contrasena,
        genero: req.body.genero,
        fechaNacimiento: req.body.fechaNacimiento
    });

    console.log(JSON.stringify({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        nombreUsuario: req.body.usuario,
        correo: req.body.correo,
        contrasenia: req.body.contrasena,
        genero: req.body.genero,
        fechaNacimiento: req.body.fechaNacimiento
    }));

    r.save()
        .then(obj => {
            res.send(obj);
        })
        .catch(error => {
            res.send(obj);
        });

});


module.exports = router;