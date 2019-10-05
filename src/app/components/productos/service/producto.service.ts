import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { Producto } from '../producto';
import { Categoria } from '../../categorias/categoria';
import { TipoEmpaque } from '../../tipo-empaques/tipo-empaque';
import { catchError, map } from 'rxjs/operators';

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
  //=== se opera el valor y el tipo de dato
  //map((response))=>es el objeto principal y si quisiera traer la parte de alguna propiedad
  // map((response.data)) para traer una propiedad en especifico
  create(producto: Producto): Observable<Producto>{
    return this.httpClient.post(`${this.urlEndPoint}/producto`, producto).pipe(
      map((response: any) => response as Producto),
      catchError(e =>{
        if(e.status ===400){
          return throwError(e);
        }
        return throwError(e);
      }));
    } 
}
