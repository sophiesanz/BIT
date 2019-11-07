console.log('Hola')
// Lenguage no tipado, no se debe declarar que tipo de variable se esta usando
// === Valida que tanto el tipo como el contenido sean iguales
// == Valida que el contenido es igual
// =! Es diferente de
// < Menor que
// > Mayor que
//

// If
var num = "3"
if (num === 3) {
    console.log('El numero es el mismo')
} else {
    console.log('El numero es diferente')
}

//Switch
var dayOfWeek = "sabado"
switch(dayOfWeek){
    case "lunes":
        console.log("Dia entre semana")
    break
    case "sabado":
        console.log("Dia fin de semana")
    break
    default:
        console.log("Valor no valido")
    break
}


console.log('2* 2= 4') 
console.log('2* 3= 6') 
console.log('2* 4= 8') 
console.log('2* 5= 10') 
console.log('2* 6= 12') 

// For
for (var index = 2; index < 7; index+=2) {
    console.log("2 * " + index + " = " + (index * 2))   
}

// While
var i = 0
while (i < 10) {
    console.log('Hola ' + i)
    i+= 2
}
// While se ejecuta mientras la condicion a validar sea verdadera
var numeros = [8,5,6,7,2,4];
var numeroEncontrado = false;
var numeroAEncontrar = 7;
var i = 0;
while (!numeroEncontrado) {
    if (numeros[i] == numeroAEncontrar) {
        console.log('La posicion del numero ' 
        + numeroAEncontrar + " es " + i);
        numeroEncontrado = true;
    }
    i++;
}

var nombre = "aDriAn";
console.log(nombre.toLowerCase());
console.log(nombre.toUpperCase());
console.log(nombre.charAt(3));
console.log(nombre.substr(0,4));


var multiplicar = 2; 
for (var i = 2; i < 11; i++) {
    console.log(i + " * " + (multiplicar) + " = " + (i * multiplicar));
    multiplicar++;
    console.log(i + " * " + (multiplicar) + " = " + (i * multiplicar)) ;
    multiplicar++;
    console.log(i + " * " + (multiplicar) + " = " + (i * multiplicar));
    multiplicar++;
    console.log(i + " * " + (multiplicar) + " = " + (i * multiplicar)) ;
    multiplicar++;
    console.log(i + " * " + (multiplicar) + " = " + (i * multiplicar));
    multiplicar++;
    console.log(i + " * " + (multiplicar) + " = " + (i * multiplicar)) ;
    multiplicar++;
    console.log(i + " * " + (multiplicar) + " = " + (i * multiplicar));
    multiplicar++;
    console.log(i + " * " + (multiplicar) + " = " + (i * multiplicar)) ;
    multiplicar++;
    console.log(i + " * " + (multiplicar) + " = " + (i * multiplicar));
    multiplicar++;
    console.log(i + " * " + (multiplicar) + " = " + (i * multiplicar)) ;
    multiplicar++;
    console.log(" ");
    multiplicar = 2;
 
}

for (var i = 2; i < 11; i++) {
    for (var x = 2; x < 11; x++) {
        console.log(i + " * " + x + " = " + (x * 2));
    }
    console.log(" ");
}