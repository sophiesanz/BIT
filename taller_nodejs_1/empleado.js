class Empleado {
    constructor(nombre, apellido,edad,mesesLaborados, cargo, sueldoMensual){
        this.nombre = nombre; 
        this.apellido = apellido;
        this.edad = edad; 
        this.mesesLaborados = mesesLaborados;
        this.cargo = cargo;
        this.sueldoMensual = sueldoMensual;
        this.empresa = "Hexsoft"
    }

    presentarEmpleado(){
        return 'Bienvenido ' + this.nombre + ' ' + this.apellido + '.Tu edad es: ' + this.edad;
    }

    obtenerDatosLaborales(){
        return 'Usted labora en: ' + this.empresa + ' y su cargo es: ' + this.cargo;
    }
    devolverSueldoMensual(){
        return this.sueldoMensual;
         
    }
    devolverMesesLaborados(){
        return  this.mesesLaborados;
        
    }
}
module.exports = Empleado;