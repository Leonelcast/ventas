import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Factura } from '../factura';
import { FacturaCreacionDTO } from '../factura-creacion-dto';


@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  private urlEndPoint = 'https://localhost:443/api/v1';
  constructor(private httpClient: HttpClient, private router: Router) {
  }
  getFacturas(): Observable<Factura[]> {
    return this.httpClient.get<Factura[]>(`${this.urlEndPoint}/Facturas`);
  }

  //=== se opera el valor y el tipo de dato
  //map((response))=>es el objeto principal y si quisiera traer la parte de alguna propiedad
  // map((response.data)) para traer una propiedad en especifico
  create(factura: FacturaCreacionDTO): Observable<Factura>
  {
    console.log(factura);
    return this.httpClient.post(`${this.urlEndPoint}/facturas`, factura).pipe(
      map((response: any) => response as Factura),
      catchError(e =>{
        if(e.status ===400){
          return throwError(e);
        }
        return throwError(e);
      }));
     }
    delete(id: number): Observable<Factura>
    {
      return this.httpClient.delete<Factura>(`${this.urlEndPoint}/facturas/${id}`).pipe();
    } 
    update(id: number, FacturaCreacionDTO: FacturaCreacionDTO): Observable<any>{
      return this.httpClient.put<any>(`${this.urlEndPoint}/facturas/${id}`, FacturaCreacionDTO).pipe(
        catchError(e=>{
          if(e.status ===400 ){
            return throwError(e);
          }
          return throwError(e);
        })
      )

    }
    getFactura(id: number): Observable<Factura>{
      return this.httpClient.get<Factura>(`${this.urlEndPoint}/facturas/${id}`).pipe(catchError(e=>{
        if(e.status !== 401){
          this.router.navigate(['/facturas']);
        }
        return throwError(e);
      }))
    }
}
