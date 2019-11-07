var Calculadora = require ('./calculadora');

var miCalculadora = new Calculadora (2,3);
console.log (miCalculadora.suma());
console.log (miCalculadora.resta());
console.log (miCalculadora.multiplicacion());
console.log (miCalculadora.division());

var calculadoraProvisional = new Calculadora (8,10);
console.log (calculadoraProvisional.suma());
console.log (calculadoraProvisional.resta());
console.log (calculadoraProvisional.multiplicacion());
console.log (calculadoraProvisional.division());