import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders  } from '@angular/common/http';
import {  TipoEmpaque  } from "../tipo-empaque";
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { TipoEmpaqueCreacionDTO } from '../tipo-empaque-creacion-dto';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TipoEmpaquesService {
  private urlEndPoint = 'https://localhost:44371/api/v1';
  constructor(private httpClient: HttpClient, private router: Router) { }
  getData(url: string){
    return this.httpClient.get<TipoEmpaque[]>(`${this.urlEndPoint}/TipoEmpaques`);
  }
  getTipoEmpaques(): Observable<TipoEmpaque[]>{
    return this.httpClient.get<TipoEmpaque[]>(`${this.urlEndPoint}/tipoEmpaques`);
  }
  create(tipoEmpaque: TipoEmpaqueCreacionDTO): Observable<TipoEmpaque>{
    return this.httpClient.post(`${this.urlEndPoint}/tipoEmpaques`, tipoEmpaque).pipe(
      map((response: any) => response as TipoEmpaque),
      catchError(e =>{
        if(e.status === 400){
          return throwError(e);
        }
        return throwError(e);
      })
    )
  }
  delete(id: number): Observable<TipoEmpaque>{
    return this.httpClient.delete<TipoEmpaque>(`${this.urlEndPoint}/tipoEmpaques/${id}`).pipe();

  }
  update(id: number, tipoEmpaqueCreacionDTO: TipoEmpaqueCreacionDTO): Observable<any>{
    return this.httpClient.put<any>(`${this.urlEndPoint}/tipoEmpaques/${id}`, tipoEmpaqueCreacionDTO).pipe(
      catchError(e=>{
        if(e.status ===400){
          return throwError(e);
        }
        
        return throwError(e);
      })
    )
  }
  gettipoEmpaque(id:number): Observable<TipoEmpaque>{
    return this.httpClient.get<TipoEmpaque>(`${this.urlEndPoint}/tipoEmpaques/${id}`).pipe(catchError(e=>{
      if(e.status !== 401){
        this.router.navigate(['/tipoEmpaques']);
      }
      return throwError(e);
    }))
  }

}
