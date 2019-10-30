/* FUNCION PARA ABRIR SELECT DE DÍAS */
function PFshowday(cont_day) {
    var PF_showDivDay = document.getElementById(cont_day);
    if (PF_showDivDay != null) {
        if (PF_showDivDay.style.display == "block") {
            PF_showDivDay.style.display = 'none';
        }
        else {
            PF_showDivDay.style.display = 'block';
        }
        return false;
    }
};
/* END FUNCION PARA ABRIR SELECT DE GENERO */



/* FUNCION PARA ABRIR SELECT DE GENERO */
function PFshowcategory(cont_category) {
    var PF_showDivcategory = document.getElementById(cont_category);
    if (PF_showDivcategory != null) {
        if (PF_showDivcategory.style.display == "block") {
            PF_showDivcategory.style.display = 'none';
        }
        else {
            PF_showDivcategory.style.display = 'block';
        }
        return false;
    }
};
/* END FUNCION PARA ABRIR SELECT DE GENERO */
/* 
1. ABOMINABLE - 3 NOV
2. JOKER  2 NOV  Y 4 NOV 
3. MALEFICA - 2 NOV  
4. AGENTE GATO - 4 NOV Y 5 NOV 
5. GEMINIS - 3 NOV Y 5 NOV  
*/


/* RESULTADO DE BUSQUEDA POR DÍAS */


function FiltroDay(value) {



    if (value == "day1") {
       
        // deshabilitados
        document.getElementById("pel-1").style.display = 'none';
        document.getElementById("pel-4").style.display = 'none';
        document.getElementById("pel-5").style.display = 'none';
        // habilitados
        document.getElementById("pel-2").style.display = 'block';
        document.getElementById("pel-3").style.display = 'block';
    } else if (value == "day2") {
        // deshabilitados
        document.getElementById("pel-2").style.display = 'none';
        document.getElementById("pel-3").style.display = 'none';
        document.getElementById("pel-4").style.display = 'none';
        // habilitados
        document.getElementById("pel-1").style.display = 'block';
        document.getElementById("pel-5").style.display = 'block';
    }
    else if (value == "day3") {
        // deshabilitados
        document.getElementById("pel-1").style.display = 'none';
        document.getElementById("pel-3").style.display = 'none';
        document.getElementById("pel-5").style.display = 'none';
        // habilitados
        document.getElementById("pel-2").style.display = 'block';
        document.getElementById("pel-4").style.display = 'block';
    }
    else if (value == "day4") {
        // deshabilitados
        document.getElementById("pel-1").style.display = 'none';
        document.getElementById("pel-2").style.display = 'none';
        document.getElementById("pel-3").style.display = 'none';
        // habilitados
        document.getElementById("pel-4").style.display = 'block';
        document.getElementById("pel-5").style.display = 'block';
    }
    else if (value == "day0") {
        // habilitados
        document.getElementById("pel-1").style.display = 'block';
        document.getElementById("pel-2").style.display = 'block';
        document.getElementById("pel-3").style.display = 'block';
        document.getElementById("pel-4").style.display = 'block';
        document.getElementById("pel-5").style.display = 'block';
    }

}

/* END RESULTADO DE BUSQUEDA POR DÍAS */

