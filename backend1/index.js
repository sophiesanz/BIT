'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var port = 3977;
mongoose.connect(
    'mongodb://localhost:27017/google',
    (error, answer) => {
        if (error){
            console.log('No se pudo conectar')
        } else {
            console.log('La conexion es posible')
            app.listen(port, ()=> {
                console.log('API escuchando en el puerto '+ port);
            })
        }
    }
)