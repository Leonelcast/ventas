import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { TipoEmpaquesComponent } from './components/tipo-empaques/tipo-empaques.component';
import { APP_ROUTING } from './app.routes';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ClienteComponent } from './components/cliente/cliente.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    CategoriasComponent,
    TipoEmpaquesComponent,
    ClienteComponent,
    ProveedorComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
