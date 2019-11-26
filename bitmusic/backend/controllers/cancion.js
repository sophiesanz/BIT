'use strict'
var Cancion = require('../models/cancion')

//Trabajar con ficheros
var fs = require('fs');
var path = require('path');

function prueba_cancion(req,res){
    res.status(200).send({
        message : "controlador cancion"
        +" esta funcionando"
    })
}

function crearCancion(req,res){
    var cancion = new Cancion();
    var params = req.body;

    cancion.titulo = params.titulo;
    cancion.duracion = params.duracion;
    cancion.genero = params.genero;
    cancion.artista = params.artista;
    cancion.archivo = params.archivo;

    cancion.save()
    .then((cancionGuardada)=>{
        if(!cancionGuardada){
            res.status(404).send({message:'No se ha guardadoo la cancion'});
        }else{
            res.status(200).send({cancion:cancionGuardada});
        }
    }).catch(error =>{
        res.status(500).send({message:'Error al guardar la cancion'});
    })
}




function eliminarCancion(req,res){
    var idCancion = req.params.id;
    
    Cancion.findByIdAndRemove(idCancion).exec()
    .then((cancionEliminada)=>{
        if (!cancionEliminada) {
            res.status(404).send({ message: "La cancion no ha sido eliminada" });
        } else {
            res.status(200).send({ cancion:cancionEliminada, message: "La cancion ha sido eliminada"  });
           
        }
    }).catch(error =>{
        res.status(500).send({ message: "Error al eliminar la cancion" });
    })
}

function obtenerCancion(req,res) {
    //Nombre fichero
    var cancionfile = req.params.cancionFile;
    //Ruta archivo
    var path_file = './uploads/canciones/'+cancionfile;
    //Se comprueba si existe
    fs.exists(path_file,function(exists){
        if(exists){
            //Devolvemos la imagen
            res.sendfile(path.resolve(path_file));
        }else{
            res.status(200).send({message:"No existe la cancion"})
            
        }
    })
}

function cargarCancion(req,res){
    var idCancion = req.params.id;
    var file_name = 'No subido...';

    //se valida si viene el archivo con la variable superglobal files
    if(req.files){
        var file_path = req.files.song.path;
        var file_split = file_path.split('\/');
        console.log(file_split)
        //se obtiene nombre del archivo
        var file_name = file_split[2];
        console.log(file_name)
        //se obtiene extension fichero
        var exp_split = file_name.split('\.');
        var file_ext = exp_split[1];
        console.log(file_name)
        if(file_ext == 'mp3' || file_ext == 'mp4'){
            Cancion.findByIdAndUpdate(idCancion,{archivo:file_name},(err,cancionGuardada)=>{
                if(err){
                    res.status(500).send({message:'Error en el servidor'});
                }else{
                    if(!cancionGuardada){
                        res.status(404).send({message:'No se ha podido cargar la cancion'});
                    }else{
                        //devuelve usuario antes de actualizarse
                        cancionGuardada.archivo = file_name;
                        res.status(200).send({cancion:cancionGuardada});
                    }
                }
            });
        }else{
            res.status(200).send({message:"Extension del archivo no correcta"});    
        }
    }else{
        res.status(200).send({message:"no ha subido ninguna imagen"});
    }
}

function obtenerTodasCanciones(req,res) {
    
    Cancion.find((err,canciones) => {
        if(err){
            res.status(500).send({
                message:"error en el servidor"
            })
        }else{
            if(!canciones){
                res.status(200).send({
                    message:"no se pudieron obtener las canciones"
                })
            }else{
                res.status(200).send({
                    canciones:canciones
                })
            }
        }
    })
}
    
    

module.exports = {
    prueba_cancion,
    crearCancion,
    eliminarCancion,
    obtenerCancion,
    cargarCancion,
    obtenerTodasCanciones
}
 

