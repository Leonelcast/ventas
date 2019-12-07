import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteCreacionDTO } from '../cliente-creacion-dto-';
import { ClienteService } from '../service/cliente-service.service';
import { Router } from '@angular/router';
import { ModalClienteService } from '../modal-cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {
  titulo: string;
  @Input() cliente: Cliente; //se utiliza imput cuando se esta modificando
  clienteDTO: ClienteCreacionDTO = new ClienteCreacionDTO(); //se utiliza para crear, ya que tiene una nueva instancia 

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private modalClienteService: ModalClienteService) {

  }

  ngOnInit() {

  }
  //las 3 cosas que espera recibir son los que esta en productoCreacionDTO son los codigos y la descripcion 
  //esto sirve para optimizar los recursos ya que no se utilizan todos los recursos de productos 
  create(): void {
    const nuevo = new ClienteCreacionDTO();
    nuevo.nit = this.cliente.nit;
    nuevo.dpi = this.cliente.dpi;
    nuevo.nombre = this.cliente.nombre;
    nuevo.direccion = this.cliente.direccion;
    this.clienteService.create(nuevo).subscribe(
      cliente => {
        Swal.fire(' Nuevo Cliente', `El cliente ${cliente.nit} ha sido creado con exito!!`, 'success');
        this.modalClienteService.notificarCambio.emit(cliente);//agrega un elemento, este hace un push 
        this.modalClienteService.cerrarModal();
        this.router.navigateByUrl('/cliente');
      },
      error => {
        Swal.fire('Nuevo cliente', `Error code ${error.status}`, 'error')
      }

    );
  }
  update(): void {
    const nuevo = new ClienteCreacionDTO();
    nuevo.nit = this.cliente.nit;
    nuevo.dpi = this.cliente.dpi;
    nuevo.nombre = this.cliente.nombre;
    nuevo.direccion = this.cliente.direccion;
    this.clienteService.update(this.cliente.nit, nuevo).subscribe(
      () => {
        Swal.fire('Actualizar Producto', `El producto ${nuevo.nit} ha sido actualizado!!`, 'success');
        this.modalClienteService.notificarCambio.emit(this.cliente);
        this.modalClienteService.cerrarModal();
        this.router.navigate(['/cliente']);
      }
    );
  }
  cerrarModal(): void {
    this.modalClienteService.cerrarModal();
  }
//? es como un if en la misma linea 
//valor original comparandolo con un valor del box


}
