import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders  } from '@angular/common/http';
import {  TipoEmpaque  } from "../tipo-empaque";

@Injectable({
  providedIn: 'root'
})
export class TipoEmpaquesService {
  private API_URL = 'https://localhost:44371/api/v1';
  constructor(private _httpClient: HttpClient) { }
  getData(url: string){
    return this._httpClient.get<TipoEmpaque[]>(`${this.API_URL}/${url}`);
  }
  getTipoEmpaques(){
    return this.getData('TipoEmpaques');
  }
}
