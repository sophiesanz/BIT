var mongoose = require ('mongoose');
//Schema crea el esquema del objeto que va a leer la base de datos
var Schema = mongoose.Schema;
var cancionSchema = Schema({
    titulo:String,
    duracion:String,
    genero:String,
    artista:String,
    archivo:String
    
});
module.exports = mongoose.model('cancion', cancionSchema);