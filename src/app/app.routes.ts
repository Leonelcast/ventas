import { RouterModule ,Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CategoriasComponent } from "./components/categorias/categorias.component";
import { TipoEmpaquesComponent } from "./components/tipo-empaques/tipo-empaques.component";
import { ClienteComponent } from './components/cliente/cliente.component';
import { Component } from '@angular/core';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { LoginComponent } from './components/login/login.component';
import { AuthguardGuard } from './components/login/guards/authguard.guard';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductosFormComponent } from './components/productos/productos-form/productos-form.component';
import { CategoriasFormComponent } from './components/categorias/categorias-form/categorias-form.component';
import { TipoEmpaqueFormComponent } from './components/tipo-empaques/tipo-empaque-form/tipo-empaque-form.component';
import { FacturasComponent } from './components/facturas/facturas.component';

const APP_ROUTES: Routes =[
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent, canActivate: [AuthguardGuard] },
    {path: 'categorias', component: CategoriasComponent, canActivate: [AuthguardGuard] },
    {path: 'categorias/page/:page', component: CategoriasComponent, canActivate: [AuthguardGuard] },
    {path: 'categoriasForm', component: CategoriasFormComponent},
    {path: 'tipoEmpaques', component: TipoEmpaquesComponent, canActivate: [AuthguardGuard]},
    {path: 'tipoEmpaquesForm', component: TipoEmpaqueFormComponent },
    {path: 'clientes', component: ClienteComponent, canActivate: [AuthguardGuard]},
    {path: 'proveedores', component: ProveedorComponent },
    {path: 'productos', component: ProductosComponent, canActivate: [AuthguardGuard]},
    {path: 'productosForm', component: ProductosFormComponent},
    {path: 'facturas', component: FacturasComponent, canActivate: [AuthguardGuard] },
    
    {path: '**', pathMatch: 'full', redirectTo: 'home'}

];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
