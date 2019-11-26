import { Component, OnInit } from '@angular/core'; 
//OnInit funciones que se van a agregar al componente inmediatamente se crea el componente
//

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() { // este metodo es obligatorio cuandoo uso "OnInit"
  }

}
