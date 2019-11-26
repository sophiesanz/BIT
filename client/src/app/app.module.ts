//Este archivo adjunta todos los componentes
// si eliminamos algun componente necesitamos borrar todo su rastro aqui
// si aparece appRoutingModule si aparece debemos borrarla
import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; //trae logica de los componentes creados
import { HeaderComponent } from './componentes/header/header.component'; 
import { ContentComponent } from './componentes/content/content.component';
import { ContentSlideComponent } from './componentes/content-slide/content-slide.component';
import { TextComponent } from './componentes/text/text.component';

import {routing, appRoutingProviders}// Se importa todo lo definido en el archivo de routing
from './app.routing';

@NgModule({
  declarations: [ //componentes generados
    AppComponent,
    HeaderComponent,
    ContentComponent,
    ContentSlideComponent,
    TextComponent
  ],
  imports: [ //modulos que va a usar el browser
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],//
  bootstrap: [AppComponent] // desde que punto se carga la aplicacion 
})
export class AppModule { }
