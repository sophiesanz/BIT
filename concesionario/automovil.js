class Automovil{
    constructor(color, marca, velocidadInicial){
        //La velocidad inicial podria no pedirse como parametro e inicializarse directamente como cero
        this.color = color;
        this.marca = marca;
        this.velocidadInicial = velocidadInicial;
        
    }
    obtenerDatosTecnicos(){
        return 'Color: ' + this.color + ' y Marca: ' + this.marca ;

    }

    
    acelerar(){
         this.velocidadInicial += 10; 
         return  'La velocidad es: ' + this.velocidadInicial;
    }
}
module.exports = Automovil;