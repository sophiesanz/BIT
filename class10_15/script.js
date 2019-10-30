
    
    // var num=3;
//*************** Opcion de un caso con una respuesta
    // switch (num) {
    //     case 1:
    //         console.log("El numero es 1");
    //         break;
    //     case 2:
    //         console.log("El numero es 2");
    //         break;
    
    //     default:
    //             console.log("Valor erroneo");
    //         break;
    // }

//*************** Opcion de varios casos con una misma respuesta
    // switch (num) {
    //     case 1:
    //     case 3:
    //     case 5:   
    //     console.log("El numero es impar");
    //         break;
    //     case 2:
    //     case 4:
    //     case 6:
    //     console.log("El numero es par");
    //         break;
    //     default:
    //         console.log("Intenta nuevamente");
    //         break
    // }
    
//*************** Document Object Model
// document.getElementById("h1").innerHTML="Titulo heredado";
// // console.log(titulo);
// document.getElementByClass("h2").innerHTML="Titulo heredado por clase";

// function bienvenido(){
//     document.getElementById("h1").innerHTML="Bienvenidos a BIT";
// }

let titulo = document.getElementById("titulo");
function mensaje() {
    let nombre = document.getElementById("name").value;
    titulo.innerHTML="Bienvenid@ " + nombre;
}