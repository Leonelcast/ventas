import { Component, OnInit } from '@angular/core';
import { AuthService } from './../login/service/auth.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  logout(): void{
    const username = this.authService.usuario.email;
    this.authService.logout();
    swal.fire('Logout', `Hola ${username}, has cerrado sesion con exito!!`, 'success');
    this.router.navigate(['/login']);
  }

}
