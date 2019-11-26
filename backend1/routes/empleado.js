'use strict'
var app = require ('express');
var EmpleadoController = 
require('../controllers/empleado')
var api = app.Router();
api.get('/prueba', EmpleadoController.prueba);
api.get('/empleado/:id', EmpleadoController.obtenerEmpleado);
api.post('/empleado', EmpleadoController.crearEmpleado);
api.put('/empleado/:id', EmpleadoController.actualizarEmpleado);
api.delete('/empleado/:id', EmpleadoController.eliminarEmpleado);
module.exports = api; 