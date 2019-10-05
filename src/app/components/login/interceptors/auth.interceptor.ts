import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import swal from 'sweetalert2';

export class AuthInterceptor implements HttpInterceptor{
    constructor(private authservice: AuthService, private router: Router){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        return next.handle(req).pipe(
            catchError(e=>{
                if(e.status === 401){
                    if(this.authservice.isAuthenticated()){
                        this.authservice.logout();
                    }
                    this.router.navigate(['/login']);
                }
                if(e.status === 403){
                    swal.fire('Acceso denegado', 'No tiene acceso a este recurso', 'warning');
                    this.router.navigate(['/home']);
                }
                return throwError(e);
            })
        )
    }
}
