import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VersoesAtivasAppComponent } from './versoes-ativas-app/versoes-ativas-app.component';
import { AppRoutingModule } from './/app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { VersoesAtivasDetailComponent } from './versoes-ativas-detail/versoes-ativas-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    VersoesAtivasAppComponent,
    MenuComponent,
    HomeComponent,
    VersoesAtivasDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
