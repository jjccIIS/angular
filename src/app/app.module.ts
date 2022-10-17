import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteModule } from './components/componente.module';
import { PaginasModule } from './pages/paginas.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginasModule,
    ComponenteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
