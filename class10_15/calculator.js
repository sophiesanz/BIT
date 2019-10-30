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

function enter_suma() {
    const { numero1, numero2 } = gettingNumbers();
    const resultado = Number(numero1) + Number(numero2);
    show_result(resultado);
}

function enter_resta() {
    const { numero1, numero2 } = gettingNumbers();
    const resultado = Number(numero1) - Number(numero2);
    show_result(resultado);

}

function enter_multiplicacion() {
    const { numero1, numero2 } = gettingNumbers();
    const resultado = Number(numero1) * Number(numero2);
    show_result(resultado);

}

function enter_division() {
    const { numero1, numero2 } = gettingNumbers();
    const resultado = Number(numero1) / Number(numero2);
    show_result(resultado);

}
function show_result(resultado) {
    result.innerHTML = resultado;
}