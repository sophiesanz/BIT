'use strict' //ecmascript
var express = require ('express');
var bodyParser = require('body-parser');
var app = express();  // funcion top-level del modulo express 
var cancionRoutes = 
require ('./routes/cancion');
var usuarioRoutes =
require ('./routes/usuario');

app.use(bodyParser.urlencoded( //Permite cargar imagenes y videos 
    {extended:false}));
app.use(bodyParser.json()); //Formato en que se va a enviar la informacion

app.use('/api',cancionRoutes);
app.use('/api',usuarioRoutes);
module.exports = app;