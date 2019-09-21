import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Producto } from '../producto';
import { Categoria } from '../../categorias/categoria';
import { TipoEmpaque } from '../../tipo-empaques/tipo-empaque';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private urlEndPoint = 'https://localhost:44371/api/v1';
  constructor(private httpClient: HttpClient, private router: Router) {
  }
  getProductos(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(`${this.urlEndPoint}/Productos`);
  }
  getCategorias(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(`${this.urlEndPoint}/Categorias`);
  }
  getTipoEmpaques(): Observable<TipoEmpaque[]> {
    return this.httpClient.get<TipoEmpaque[]>(`${this.urlEndPoint}/TipoEmpaques`);
  }
}
