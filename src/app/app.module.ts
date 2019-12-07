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
import { TokenInterceptor } from './components/login/interceptors/token.interceptor';
import { ProductosComponent } from './components/productos/productos.component';
import { AuthInterceptor } from './components/login/interceptors/auth.interceptor';
import { ProductosFormComponent } from './components/productos/productos-form/productos-form.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { CategoriasFormComponent } from './components/categorias/categorias-form/categorias-form.component';
import { TipoEmpaqueFormComponent } from './components/tipo-empaques/tipo-empaque-form/tipo-empaque-form.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { DetalleFacturaComponent } from './components/detalle-factura/detalle-factura.component';
import { EmailClientesComponent } from './components/email-clientes/email-clientes.component';
import { TelefonoClientesComponent } from './components/telefono-clientes/telefono-clientes.component';
import { ComprasComponent } from './components/compras/compras.component';
import { DetalleComprasComponent } from './components/detalle-compras/detalle-compras.component';
import { EmailProveedoresComponent } from './components/email-proveedores/email-proveedores.component';
import { InventariosComponent } from './components/inventarios/inventarios.component';
import { TelefonoProveedoresComponent } from './components/telefono-proveedores/telefono-proveedores.component';
import { ClientesFormComponent } from './components/cliente/clientes-form/clientes-form.component';
import { FacturasFormComponent } from './components/facturas/facturas-form/facturas-form.component';
import { DetalleFacturaFormComponent } from './components/detalle-factura/detalle-factura-form/detalle-factura-form.component';

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
    ProductosComponent,
    ProductosFormComponent,
    PaginatorComponent,
    CategoriasFormComponent,
    TipoEmpaqueFormComponent,
    FacturasComponent,
    DetalleFacturaComponent,
    EmailClientesComponent,
    TelefonoClientesComponent,
    ComprasComponent,
    DetalleComprasComponent,
    EmailProveedoresComponent,
    InventariosComponent,
    TelefonoProveedoresComponent,
    ClientesFormComponent,
    FacturasFormComponent,
    DetalleFacturaFormComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
