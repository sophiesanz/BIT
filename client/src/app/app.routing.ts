import {ModuleWithProviders} from
'@angular/core';
//modulos y funcionalidades de router
import {Routes,RouterModule} from
'@angular/router';

import {ContentComponent} from
'./componentes/content/content.component';
import {ContentSlideComponent} from    
'./componentes/content-slide/content-slide.component'
import {TextComponent } from    
'./componentes/text/text.component';
const appRoutes: Routes =[
    {path: '',component:ContentComponent},
    {path: 'slide',component:ContentSlideComponent},
    {path: 'text',component:TextComponent}
];
export const appRoutingProviders: any [] = [];
export const routing:ModuleWithProviders =
RouterModule.forRoot(appRoutes);