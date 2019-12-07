import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { Producto } from '../producto';
import { Categoria } from '../../categorias/categoria';
import { TipoEmpaque } from '../../tipo-empaques/tipo-empaque';
import { catchError, map } from 'rxjs/operators';
import { ProductoCreacionDTO } from '../producto-creacion-dto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private urlEndPoint = 'https://localhost:443/api/v1';
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
  create(producto: ProductoCreacionDTO): Observable<Producto>
  {
    console.log(producto);
    return this.httpClient.post(`${this.urlEndPoint}/productos`, producto).pipe(
      map((response: any) => response as Producto),
      catchError(e =>{
        if(e.status ===400){
          return throwError(e);
        }
        return throwError(e);
      }));
     }
    delete(id: number): Observable<Producto>
    {
      return this.httpClient.delete<Producto>(`${this.urlEndPoint}/productos/${id}`).pipe();
    } 
    update(id: number, ProductoCreacionDTO: ProductoCreacionDTO): Observable<any>{
      return this.httpClient.put<any>(`${this.urlEndPoint}/productos/${id}`, ProductoCreacionDTO).pipe(
        catchError(e=>{
          if(e.status ===400 ){
            return throwError(e);
          }
          return throwError(e);
        })
      )

    }
    getProducto(id: number): Observable<Producto>{
      return this.httpClient.get<Producto>(`${this.urlEndPoint}/productos/${id}`).pipe(catchError(e=>{
        if(e.status !== 401){
          this.router.navigate(['/productos']);
        }
        return throwError(e);
      }))
    }
}
