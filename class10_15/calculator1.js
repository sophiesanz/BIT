//Variables

//VAR: Solo se usan globales
//CONST: Son constantes, su valor no cambia y son locales
//LET: Son reasignables, su valor debe cambiar y son locales


function gettingNumbers() {
    const numero1 = document.getElementById("num1").value;
    const numero2 = document.getElementById("num2").value;
    return { 
        numero1,
        numero2,
    };
}
function show_result(resultado) {
    result.innerHTML = resultado;
}

function operador(tipo) {
    debugger;
    const { numero1, numero2 } = gettingNumbers();
    let resultado;
    if(tipo === 'suma'){
       resultado = Number(numero1) + Number(numero2);
    }
    if(tipo === 'resta'){
        resultado = Number(numero1) - Number(numero2);
    }
    if(tipo === 'multiplicacion'){
        resultado = Number(numero1) * Number(numero2);
     }
    if(tipo === 'division'){
        resultado = Number(numero1) / Number(numero2);
    }
   
    show_result(resultado);
}

