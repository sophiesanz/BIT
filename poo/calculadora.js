//clase
class Calculadora {
    //inicializa las variables que voy a usar dentro de mi clase
    constructor(a,b){
        this.a = a;
        this.b = b;
    }

    //metodos de la clase
    suma(){
        return this.a + this.b;
    }

    resta(){
        return this.a - this.b;
    }

    multiplicacion(){
        return this.a * this.b;
    }

    division(){
        return this.a / this.b;
    }

    reiniciarValores(){
        this.a = undefined;
        this.b = undefined;
    }
}
module.exports = Calculadora; 