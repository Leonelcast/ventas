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

const APP_ROUTES: Routes =[
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent, canActivate: [AuthguardGuard] },
    {path: 'categorias', component: CategoriasComponent },
    {path: 'tipoEmpaques', component: TipoEmpaquesComponent},
    {path: 'clientes', component: ClienteComponent},
    {path: 'proveedores', component: ProveedorComponent },
    {path: 'productos', component: ProductosComponent},
    {path: 'productosForm', component: ProductosFormComponent},
    
    {path: '**', pathMatch: 'full', redirectTo: 'home'}

];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
