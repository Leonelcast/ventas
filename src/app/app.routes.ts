import { RouterModule ,Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CategoriasComponent } from "./components/categorias/categorias.component";
import { TipoEmpaquesComponent } from "./components/tipo-empaques/tipo-empaques.component";
import { ClienteComponent } from './components/cliente/cliente.component';
import { ClientesFormComponent } from './components/cliente/clientes-form/clientes-form.component';
import { Component } from '@angular/core';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { LoginComponent } from './components/login/login.component';
import { AuthguardGuard } from './components/login/guards/authguard.guard';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductosFormComponent } from './components/productos/productos-form/productos-form.component';
import { CategoriasFormComponent } from './components/categorias/categorias-form/categorias-form.component';
import { TipoEmpaqueFormComponent } from './components/tipo-empaques/tipo-empaque-form/tipo-empaque-form.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { DetalleFacturaComponent } from './components/detalle-factura/detalle-factura.component';
import {EmailClientesComponent  } from './components/email-clientes/email-clientes.component';
import { EmailProveedoresComponent } from './components/email-proveedores/email-proveedores.component';
import { TelefonoClientesComponent } from './components/telefono-clientes/telefono-clientes.component';
import { ComprasComponent } from './components/compras/compras.component';
import { DetalleComprasComponent } from './components/detalle-compras/detalle-compras.component';
import { InventariosComponent } from './components/inventarios/inventarios.component';
import { TelefonoProveedoresComponent } from './components/telefono-proveedores/telefono-proveedores.component';

const APP_ROUTES: Routes =[
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent, canActivate: [AuthguardGuard] },
    {path: 'categorias', component: CategoriasComponent, canActivate: [AuthguardGuard] },
    {path: 'categorias/page/:page', component: CategoriasComponent, canActivate: [AuthguardGuard] },
    {path: 'categoriasForm', component: CategoriasFormComponent},
    {path: 'tipoEmpaques', component: TipoEmpaquesComponent, canActivate: [AuthguardGuard]},
    {path: 'tipoEmpaquesForm', component: TipoEmpaqueFormComponent },
    {path: 'clientes', component: ClienteComponent, canActivate: [AuthguardGuard]},
    {path: 'clientesForm', component: ClientesFormComponent, canActivate: [AuthguardGuard] },
    {path: 'proveedores', component: ProveedorComponent },
    {path: 'productos', component: ProductosComponent, canActivate: [AuthguardGuard]},
    {path: 'productosForm', component: ProductosFormComponent},
    {path: 'facturas', component: FacturasComponent, canActivate: [AuthguardGuard] },
    {path: 'detalleFactura', component: DetalleFacturaComponent, canActivate: [AuthguardGuard] },
    {path: 'emailClientes', component: EmailClientesComponent, canActivate: [AuthguardGuard] },
    {path: 'emailProveedores', component: EmailProveedoresComponent, canActivate: [AuthguardGuard] },
    {path: 'telefonoClientes', component: TelefonoClientesComponent, canActivate: [AuthguardGuard] },
    {path: 'compras', component: ComprasComponent, canActivate: [AuthguardGuard] },
    {path: 'detalleCompras', component: DetalleComprasComponent, canActivate: [AuthguardGuard] },
    {path: 'inventarios', component: InventariosComponent, canActivate: [AuthguardGuard] },
    {path: 'telefonoProveedores', component: TelefonoProveedoresComponent, canActivate: [AuthguardGuard] },
    
    {path: '**', pathMatch: 'full', redirectTo: 'home'}

];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
