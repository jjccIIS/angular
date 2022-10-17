import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ComponenteModule } from '../components/componente.module';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { ClientePageComponent } from './cliente-page/cliente-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    ErrorPageComponent,
    ClientePageComponent
    ],
  imports: [
    CommonModule,
    ComponenteModule
  ],
  exports:[
    HomePageComponent,
    ErrorPageComponent
  ]
})
export class PaginasModule { }
