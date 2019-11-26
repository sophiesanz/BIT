
'use strict'
var app = require ('express');
var CancionController = 
require('../controllers/cancion')

var multipart = require('connect-multiparty');
var md_upload =  multipart({uploadDir : './uploads/canciones'});//Donde se va a guardar la imagen
var api = app.Router();
api.get('/prueba_cancion', CancionController.prueba_cancion);
api.post('/cancion', CancionController.crearCancion);
api.delete('/cancion/:id', CancionController.eliminarCancion);
api.post('/cargar-cancion/:id', md_upload, CancionController.cargarCancion);
api.get('/obtener-cancion/:cancionFile', md_upload, CancionController.obtenerCancion);
api.get('/canciones/', md_upload, CancionController.obtenerTodasCanciones);
module.exports = api; 