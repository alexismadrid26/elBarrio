var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
//var database = require("./modules/database");
var usuariosRouter = require('./routers/usuarios-router');
var proyectosRouter = require('./routers/proyectos-router');
var principalRouter = require('./routers/principal-router');
// var cors = require('cors'); //Cross-Origin Resource Sharing (CORS), Intercambio de recursos de origen cruzado (CORS)
var app = express();

app.use(express.static("public"));
app.use(session({secret:"ASDFE$%#%",resave:true, saveUninitialized:true}));

var server_port = process.env.YOUR_PORT || process.env.PORT || 3333;
var server_host = process.env.YOUR_HOST || '0.0.0.0';

// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/usuarios",usuariosRouter);
app.use("/proyectos",proyectosRouter);
app.use("/principal",principalRouter);


app.listen(server_port, server_host,function(){
    console.log("Servidor en linea");
});