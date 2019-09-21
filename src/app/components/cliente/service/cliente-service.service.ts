import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClienteService{
  private API_URL = 'https://localhost:44371/api/v1';
  private token ='';
  constructor(private _httpClient: HttpClient) { }
  getData(url: string){
    const headers = new HttpHeaders({'Authorization' : ''});
    return this._httpClient.get(`${this.API_URL}/${url}`, {headers});
  }
  getClientes(){
    return this.getData('Clientes');
  }
}



