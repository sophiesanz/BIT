// Se hace la conexion con los modelos que definimos
'use strict'
var Empleado = require ('../models/empleado');
function prueba(req,res){
    res.status(200).send({
        message: 'controlador empleado esta funcionando'
    })
}
module.exports = {prueba}