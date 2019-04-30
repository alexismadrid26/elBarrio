var express = require("express");
var router = express.Router();
var usuario = require("../models/proyecto");
var mongoose = require("mongoose");


//Obtener el listado de las usuario
router.get("/",function(req,res){
    usuario.find().sort({orden:1})
    .then(data=>{
        res.send(data);
    })
    .catch(error=>{
        res.send(error);
    });
});

module.exports = router;