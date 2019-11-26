var mongoose = require ('mongoose');
//Schema crea el esquema del objeto que va a leer la base de datos
var Schema = mongoose.Schema;
var empleadoSchema = Schema({
    nombre:String,
    apellido:String,
    edad:String,
    empresa:String,
    meses:String,
    salario:String
});
module.exports = mongoose.model('empleado',empleadoSchema);