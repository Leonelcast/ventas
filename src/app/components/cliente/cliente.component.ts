import { Component, OnInit } from '@angular/core';
import { ClienteService } from "./service/cliente-service.service";
import { Cliente } from './cliente';
import { ModalClienteService } from './modal-cliente.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: any[];
  clienteSeleccionado: Cliente;
  tipo: string;

  constructor(private clienteService: ClienteService, private ModalClienteService: ModalClienteService) {
    this.clienteService.getClientes().subscribe((data: any) => {
      this.clientes = data;
    });
   }

  ngOnInit() {
    this.ModalClienteService.notificarCambio.subscribe(cliente => {
      if (this.tipo === 'new') {
        this.clientes.push(cliente);
      } else if (this.tipo === 'update') {
        this.clientes = this.clientes.map(clienteOriginal => {
          if (cliente.codigoProducto === clienteOriginal.nit) {
            clienteOriginal = cliente;
          }
          return clienteOriginal;
        });
      }
    });
  }

  delete(cliente: Cliente): void {
    Swal.fire({
      title: 'Eliminar registro',
      text: 'Está seguro de eliminar el registro?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085D6',
      cancelButtonColor: '#D33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      confirmButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
        this.clienteService.delete(cliente.nit).subscribe(
          () => {
            this.clientes = this.clientes.filter(prod => prod !== cliente);
            Swal.fire('Producto eliminado', `Producto ${cliente.nit} eliminado correctamente`, 'success');
          }
        );
      });
    }

    abrirModal(cliente?: Cliente) {
      if (cliente) {
        this.clienteSeleccionado = cliente;
        this.tipo = 'update';
      } else {
        this.tipo = 'new';
        this.clienteSeleccionado = new Cliente();
      }
      this.ModalClienteService.abrirModal();
    }

}
