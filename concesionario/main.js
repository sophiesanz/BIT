var Automovil = require ('./automovil');

var miAutomovil = new Automovil ('Rojo', 'Ford', 50);
console.log(miAutomovil.obtenerDatosTecnicos());
console.log(miAutomovil.acelerar());
console.log(miAutomovil.acelerar());
console.log(miAutomovil.acelerar());
console.log(" ");

var hAutomovil = new Automovil ('Blanco', 'Jeep', 70);
console.log(hAutomovil.obtenerDatosTecnicos());
console.log(hAutomovil.acelerar());
console.log(hAutomovil.acelerar());
console.log(hAutomovil.acelerar());
console.log(" ");


var mAutomovil = new Automovil ('Blanco', 'Spark', 100);
console.log(mAutomovil.obtenerDatosTecnicos());
console.log(mAutomovil.acelerar());
console.log(mAutomovil.acelerar());
console.log(" ");






