var mongoose = require ('mongoose');
//Schema crea el esquema del objeto que va a leer la base de datos
var Schema = mongoose.Schema;
var userSchema = Schema({
    name:String,
    age:Number,
    email:String,
    password:String,
    image:String,
    role:String
});
module.exports = mongoose.model('user', userSchema);