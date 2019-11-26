'use strict'
var Empleado = require('../models/empleado')

function prueba(req,res){
    res.status(200).send({
        message : "controlador empleado"
        +" esta funcionando"
    })
}

function crearEmpleado(req,res){
    var empleado = new Empleado();
    var params = req.body;

    empleado.nombre = params.nombre;
    empleado.apellido = params.apellido;
    empleado.edad = params.edad;
    empleado.empresa = "GOOGLE";
    empleado.meses = params.meses;
    empleado.salario = params.salario;

    empleado.save()
    .then((empleadoGuardado)=>{
        if(!empleadoGuardado){
            res.status(404).send({message:'No se ha registrado el empleado'});
        }else{
            res.status(200).send({empleado:empleadoGuardado});
        }
    }).catch(error =>{
        res.status(500).send({message:'Error al guardar el empleado'});
    })
}

function obtenerEmpleado(req,res){
    var idEmpleado = req.params.id;

    Empleado.findById(idEmpleado).exec()
    .then((empleado)=>{
        if (!empleado) {
            res.status(404).send({ message: "El empleado no existe" });
        } else {
            res.status(200).send({ empleado });
        }
    })
    .catch(error =>{
        res.status(500).send({ message: "Error en la peticion" });        
    })

}

function actualizarEmpleado(req,res){
    var idEmpleado = req.params.id;
    var nuevosDatos = req.body;
    
    Empleado.findByIdAndUpdate(idEmpleado,nuevosDatos).exec()
    .then((empleadoActualizado)=>{
        if (!empleadoActualizado) {
            res.status(404).send({ message: "El empleado no ha sido actualizado" });
        } else {
            res.status(200).send({ empleado: empleadoActualizado });
        }
    }).catch(error =>{
        res.status(500).send({ message: "Error al actualizar el empleado" });
    })
}

function eliminarEmpleado(req,res){
    var idEmpleado = req.params.id;
    
    Empleado.findByIdAndRemove(idEmpleado).exec()
    .then((empleadoEliminado)=>{
        if (!empleadoEliminado) {
            res.status(404).send({ message: "El empleado no ha sido eliminado" });
        } else {
            res.status(200).send({ empleado: empleadoEliminado });
        }
    }).catch(error =>{
        res.status(500).send({ message: "Error al eliminar el empleado" });
    })
    
}

 /* 
function crearEmpleado(req,res){
    var empleado = new Empleado();
    var params = req.body;

    empleado.nombre = params.nombre;
    empleado.apellido = params.apellido;
    empleado.edad = params.edad;
    empleado.empresa = "GOOGLE";
    empleado.meses = params.meses;
    empleado.salario = params.salario;

    empleado.save((error,empleadoGuardado)=>{
        if(error){
            res.status(500).send({message:'Error al guardar el empleado'});
        }else{
            if(!empleadoGuardado){
                res.status(404).send({message:'No se ha registrado el empleado'});
            }else{
                res.status(200).send({empleado:empleadoGuardado});
            }
        }
    })
}

function obtenerEmpleado(req,res){
    var idEmpleado = req.params.id;

    Empleado.findById(idEmpleado, (error,empleado) =>{
        if (error) {
            res.status(500).send({ message: "Error en la peticion" });
        } else {
            if (!empleado) {
                res.status(404).send({ message: "El empleado no existe" });
            } else {
                res.status(200).send({ empleado });
            }
        }
    })
}

function actualizarEmpleado(req,res){
    var idEmpleado = req.params.id;
    var nuevosDatos = req.body;

    Empleado.findByIdAndUpdate(idEmpleado,nuevosDatos,(error,empleadoActualizado) =>{
        if (error) {
            res.status(500).send({ message: "Error al actualizar el empleado" });
        } else {
            if (!empleadoActualizado) {
                res.status(404).send({ message: "El empleado no ha sido actualizado" });
            } else {
                res.status(200).send({ empleado: empleadoActualizado });
            }
        }
    })
}

function eliminarEmpleado(req,res){
    var idEmpleado = req.params.id;
    
    Empleado.findByIdAndRemove(idEmpleado,(error,empleadoEliminado)=>{
        if (error) {
            res.status(500).send({ message: "Error al eliminar el empleado" });
        } else {
            if (!empleadoEliminado) {
                res.status(404).send({ message: "El empleado no ha sido eliminado" });
            } else {
                res.status(200).send({ empleado: empleadoEliminado });
            }
        }
    })
} */

module.exports = {
    prueba,
    crearEmpleado,
    obtenerEmpleado,
    actualizarEmpleado,
    eliminarEmpleado
}
 