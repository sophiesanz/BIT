import { Component } from '@angular/core'; //importa libreria de angular
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({    //  se define un componente y se dan tres selectores principales
  selector: 'app',  //nombre de la etiqueta, si cambio el nombre, no va a encontrar el componente
  templateUrl: './app.component.html', //html del componente que vamos a crear
  //styleUrls: ['./app.component.css'] //css de todos los estilos en general que vamos a crear
  styleUrls: []
})
export class AppComponent {
  // title = 'Sofia';
  cambiar = '1'; 
  personas = [
    {
      nombre:'Camila',
      edad:22
    },{
      nombre:'Juan',
      edad:28
    },{
      nombre:'Angela',
      edad:30
    }
  ]
  modificar(numero){
  //  this.cambiar = !this.cambiar;
  this.cambiar= numero; //funciona para if y para switch
  }

}

