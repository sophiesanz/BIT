var arteatros = {"Bogotá":["Unicentro","Teatro Norte","Teatro Sur"],"Cali":["Chipichape","Unico","Viva"],"Medellin":["Aventura Plaza","Bosque Plaza","Oviedo"]};
var arpelis = {"Unicentro":["Malefica","Geminis","Abominable","Joker", "Agente 00-Gato"],"Teatro Norte":["Malefica","Abominable","Joker"], "Teatro Sur":["Malefica","Joker"], "Chipichape":["Geminis","Abominable","Joker"],"Unico":["Malefica","Joker"], "Viva":["Malefica","Agente 00-Gato"], "Aventura Plaza":["Malefica","Abominable","Joker"],"Bosque Plaza":["Agente 00-Gato","Abominable","Joker"], "Oviedo":["Geminis","Malefica"]};
var arhora={"Malefica":["2:00 pm","4:00 pm","6:00 pm","8:00 pm"],"Geminis":["2:30 pm","4:40 pm","6:55 pm", "9:10 pm"], "Abominable":["1:00 pm","3:00 pm","5:00 pm", "7:00 pm"], "Joker":["2:30 pm","5:40 pm","7:55 pm", "9:20 pm"],"Agente 00-Gato":["1:30 pm","3:40 pm","5:55 pm", "7:10 pm"]}
function arCityChange() {
    var aroptions = document.getElementById('city').options;
    var arindex = aroptions.selectedIndex;
    var arciudadElegida = aroptions[arindex].text;

    var arListaTeatros = arteatros[arciudadElegida];

    var arSelectTeatro = document.getElementById('arteatro');
    blanquear(arSelectTeatro);
    blanquear(document.getElementById('arpeli'));
    blanquear(document.getElementById('arhora'));

    for (let i = 0; i < arListaTeatros.length; i++) {
        const arTeatroFor = arListaTeatros[i];
        var option = document.createElement("option");
        option.text = arTeatroFor;
        arSelectTeatro.add(option);
    }
}
function arTeatroChange() {
    var aroptions = document.getElementById('arteatro').options;
    var arindex = aroptions.selectedIndex;
    var arTeatroElegido = aroptions[arindex].text;

    var arListPelis = arpelis[arTeatroElegido];

    console.log(arTeatroElegido);
    var arpelisSelect = document.getElementById('arpeli');
    blanquear(arpelisSelect);
    blanquear(document.getElementById('arhora'));

    for (let i = 0; i < arListPelis.length; i++) {
        const arPelifor = arListPelis[i];
        var option = document.createElement("option");
        option.text = arPelifor;
        arpelisSelect.add(option);
    }
}

function arPeliChange() {
    var aroptions = document.getElementById('arpeli').options;
    var arindex = aroptions.selectedIndex;
    var arPeliElegida = aroptions[arindex].text;

    var arListHora = arhora[arPeliElegida];

    console.log(arPeliElegida);
    var arhoraSelect = document.getElementById('arhora');
    blanquear(arhoraSelect);

    for (let i = 0; i < arListHora.length; i++) {
        const arHorafor = arListHora[i];
        var option = document.createElement("option");
        option.text = arHorafor;
        arhoraSelect.add(option);
    }
}
function blanquear(arSelect) {
    var artamano = arSelect.length;
    for (var i = 1 ; i < artamano; i++) {
            arSelect.remove(1);
    }
}