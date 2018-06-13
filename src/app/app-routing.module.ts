import { VersoesAtivasAppComponent } from './versoes-ativas-app/versoes-ativas-app.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'versoesativas', component: VersoesAtivasAppComponent}
 ];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
