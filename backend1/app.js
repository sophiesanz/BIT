'use strict' //ecmascript
var express = require ('express');
var bodyParser = require('body-parser');
var app = express();  // funcion top-level del modulo express 
var empleadoRoutes =
require ('./routes/empleado');

app.use(bodyParser.urlencoded( //Permite cargar imagenes y videos 
    {extended:false}));
app.use(bodyParser.json()); //Formato en que se va a enviar la informacion

app.use('/api',empleadoRoutes);
module.exports = app;