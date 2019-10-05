import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categoria } from '../categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private API_URL = 'https://localhost:44371/api/v1';
  constructor(private _httpClient: HttpClient) { }
  getData(url: string){
    return this._httpClient.get<Categoria[]>(`${this.API_URL}/${url}`);
  }
  getCategorias(){
    return this.getData('Categorias');
  }
}
