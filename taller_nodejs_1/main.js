var Empleado = require('./empleado');
var funciones = require('./nomina');


var empleado1 = new Empleado('Hector', 'Alcazar',31,10, 'UI Developer', 7000000);
console.log(empleado1.presentarEmpleado());
console.log(empleado1.obtenerDatosLaborales());
console.log(funciones.obtenerDiasVacaciones(empleado1.devolverMesesLaborados()));
console.log(funciones.obtenerTotalAportesLegales(empleado1.devolverSueldoMensual()))
console.log(" ");

var empleado2 = new Empleado('Sofia', 'Sanchez',29,21, 'QA Analyst', 6000000);
console.log(empleado2.presentarEmpleado());
console.log(empleado2.obtenerDatosLaborales());
console.log(funciones.obtenerDiasVacaciones(empleado2.devolverMesesLaborados()));
console.log(funciones.obtenerTotalAportesLegales(empleado2.devolverSueldoMensual()))
console.log(" ");

var empleado3 = new Empleado('Miguel', 'Rivera',30,3, 'BE Developer', 10000000);
console.log(empleado3.presentarEmpleado());
console.log(empleado3.obtenerDatosLaborales());
console.log(funciones.obtenerDiasVacaciones(empleado3.devolverMesesLaborados()));
console.log(funciones.obtenerTotalAportesLegales(empleado3.devolverSueldoMensual()))
console.log(" ");
