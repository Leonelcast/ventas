import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _usuario: Usuario;
  private _token: string;
  //angular trabaja con inyeccion de dependencias
  //http client se importa para poder hacer todas las peticiones que postman nos ofrece, ejemplo: post, delete, get ect...
  constructor(private httpclient: HttpClient) { }

  public get token(): string {
    if (this._token != null) {
      return this._token;

    } else if (this._token == null && sessionStorage.getItem('token') != null) {
      this._token = sessionStorage.getItem('token');
      return this._token;
    }
    return null;
  }
  public get usuario(): Usuario {
    if (this._usuario != null) {
      return this._usuario;
    } else if (this._usuario == null && sessionStorage.getItem('usuario') != null) {
      this._usuario = JSON.parse(sessionStorage.getItem('usuario'));
      return this._usuario
    }
    return new Usuario();
  }
  //la peticion espera recibir un body 
  login(usuario: Usuario): Observable<any> {
    const urlEndPoint = 'https://localhost:443/api/v1/cuentas/login';
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    //me retorna el token y la expiracion de ese token 
    return this.httpclient.post(urlEndPoint, usuario, { headers: httpHeaders });
  }
  //logout
  logout(): void {
    this._token = null;
    this._usuario = null;
    sessionStorage.clear();
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('usuario');
  }
  isAuthenticated(): boolean {
    const payload = this.GetDataToken(this.token);
    if (payload != null && payload.unique_name && payload.unique_name.length > 0) {
      //console.log(payload.unique_name.length);
      return true;
    }
    return false;
  }
  saveUser(token: string) {
    this._usuario = new Usuario();
    const payload = this.GetDataToken(token);
    this._usuario.email = payload.unique_name;
    sessionStorage.setItem('usuario', JSON.stringify(this._usuario));
  }
  saveToken(token: string) {
    this._token = token;
    sessionStorage.setItem('token', token);
  }
  GetDataToken(token: string): any {
    if (token != null) {
      return JSON.parse(atob(token.split('.')[1]));
    }
    return null;
  }
}
