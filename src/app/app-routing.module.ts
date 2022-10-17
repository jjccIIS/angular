import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientePageComponent } from './pages/cliente-page/cliente-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {path:'home',component:HomePageComponent},
  {path:'cliente',component:ClientePageComponent},
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'**',component:ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
