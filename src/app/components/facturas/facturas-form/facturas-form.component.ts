import { Component, OnInit, Input } from '@angular/core';
import { Factura } from '../factura';
import { FacturaCreacionDTO } from '../factura-creacion-dto';
import { FacturaService } from '../service/factura.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ModalFacturaService } from '../modal-factura.service';

@Component({
  selector: 'app-facturas-form',
  templateUrl: './facturas-form.component.html',
  styleUrls: ['./facturas-form.component.css']
})
export class FacturasFormComponent implements OnInit {

  titulo: string;
  @Input() factura: Factura; //se utiliza imput cuando se esta modificando
  
  facturaDTO: FacturaCreacionDTO = new FacturaCreacionDTO(); //se utiliza para crear, ya que tiene una nueva instancia 

  constructor(
    private facturaService: FacturaService,
  
    private router: Router,
    private modalfacturaService: ModalFacturaService ) {

  }

  ngOnInit() {
    
  }
  create(): void {
    const nuevo = new FacturaCreacionDTO();
    nuevo.nit = this.factura.nit;
    nuevo.fecha = this.factura.fecha;
    nuevo.total = this.factura.total;
    this.facturaService.create(nuevo).subscribe(
      factura => {
        Swal.fire(' Nuevo factura', `El factura ${factura.nit} ha sido creado con exito!!`, 'success');
        this.modalfacturaService.notificarCambio.emit(factura);//agrega un elemento, este hace un push 
        this.modalfacturaService.cerrarModal();
        this.router.navigateByUrl('/facturas');
      },
      error => {
        Swal.fire('Nuevo factura', `Error code ${error.status}`, 'error')
      }

    );
  }
  update(): void {
    const nuevo = new FacturaCreacionDTO();
    nuevo.nit = this.factura.nit;
    nuevo.fecha = this.factura.fecha;
    nuevo.total = this.factura.total;
    this.facturaService.update(this.factura.numeroFactura, nuevo).subscribe(
      () => {
        Swal.fire('Actualizar factura', `El factura ${nuevo.nit} ha sido actualizado!!`, 'success');
        this.modalfacturaService.notificarCambio.emit(this.factura);
        this.modalfacturaService.cerrarModal();
        this.router.navigate(['/facturas']);
      }
    );
  }
  cerrarModal(): void {
    this.modalfacturaService.cerrarModal();
  }
}
