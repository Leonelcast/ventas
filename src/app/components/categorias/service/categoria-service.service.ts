import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categoria } from '../categoria';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { CategoriaCreacionDTO } from '../categorias-creacion-dto';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private urlEndPoint= 'https://localhost:44371/api/v1';
  constructor(private httpClient: HttpClient, private router: Router) { }
  getData(url: string){
    return this.httpClient.get(`${this.urlEndPoint}/${url}`);
  }
  getCategorias(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(`${this.urlEndPoint}/Categorias`);
  }
  create(categoria: CategoriaCreacionDTO): Observable<Categoria>{
    return this.httpClient.post(`${this.urlEndPoint}/categorias`, categoria).pipe(
      map((response: any) => response as Categoria),
      catchError(e =>{
        if(e.status === 400){
          return throwError(e);
        }
        return throwError(e);
      })
    )
  }
  delete(id: number): Observable<Categoria>{
    return this.httpClient.delete<Categoria>(`${this.urlEndPoint}/categorias/${id}`).pipe();

  }
  update(id: number, CategoriaCreacionDTO: CategoriaCreacionDTO): Observable<any>{
    return this.httpClient.put<any>(`${this.urlEndPoint}/categorias/${id}`, CategoriaCreacionDTO).pipe(
      catchError(e=>{
        if(e.status ===400){
          return throwError(e);
        }
        
        return throwError(e);
      })
    )
  }
  getCategoria(id:number): Observable<Categoria>{
    return this.httpClient.get<Categoria>(`${this.urlEndPoint}/categorias/${id}`).pipe(catchError(e=>{
      if(e.status !== 401){
        this.router.navigate(['/categorias']);
      }
      return throwError(e);
    }))
  }
}
