    var nombre = prompt("Ingrese su nombre");
    if (nombre!=null ) {
        var edad = prompt("Ingrese su edad");
        
        if (edad >= 18) {
        alert("Bienvenid@" + nombre + ", eres mayor de edad");
        } else {
        alert(nombre + " tienes menos de la edad permitida");
        }
    }
    