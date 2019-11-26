'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var port = 3977;
mongoose.connect(
    'mongodb://localhost:27017/testing', // aqui se coloca el nombre de la base de datos
    (error, answer) => {
        if (error){
            console.log("Connection wasn't possible")
        } else {
            console.log('Connection is working')
            app.listen(port, ()=> {
                console.log('API is listening the port '+ port);
            })
        }
    }
)