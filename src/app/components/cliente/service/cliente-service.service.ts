import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Cliente } from '../cliente';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { ClienteCreacionDTO } from '../cliente-creacion-dto-';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService{
  private urlEndPoint = 'https://localhost:443/api/v1';
  constructor(private httpClient: HttpClient, private router: Router) {
  }
  getClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(`${this.urlEndPoint}/clientes`);
  }

  //=== se opera el valor y el tipo de dato
  //map((response))=>es el objeto principal y si quisiera traer la parte de alguna propiedad
  // map((response.data)) para traer una propiedad en especifico
  create(cliente: ClienteCreacionDTO): Observable<Cliente>
  {
    console.log(cliente);
    return this.httpClient.post(`${this.urlEndPoint}/clientes`, cliente).pipe(
      map((response: any) => response as Cliente),
      catchError(e =>{
        if(e.status ===400){
          return throwError(e);
        }
        return throwError(e);
      }));
     }
    delete(id: number): Observable<Cliente>
    {
      return this.httpClient.delete<Cliente>(`${this.urlEndPoint}/clientes/${id}`).pipe();
    } 
    update(id: number, ClienteCreacionDTO: ClienteCreacionDTO): Observable<any>{
      return this.httpClient.put<any>(`${this.urlEndPoint}/clientes/${id}`, ClienteCreacionDTO).pipe(
        catchError(e=>{
          if(e.status ===400 ){
            return throwError(e);
          }
          return throwError(e);
        })
      )

    }
    getCliente(id: number): Observable<Cliente>{
      return this.httpClient.get<Cliente>(`${this.urlEndPoint}/clientes/${id}`).pipe(catchError(e=>{
        if(e.status !== 401){
          this.router.navigate(['/clientes']);
        }
        return throwError(e);
      }))
    }
}



