import { Component, OnInit } from '@angular/core';
import { Factura } from './factura';
import Swal from 'sweetalert2';
import { FacturaService } from './service/factura.service';
import { ModalFacturaService } from './modal-factura.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  facturas: any[];
  facturaSeleccionado: Factura;
  tipo: string;

  constructor(private facturaService: FacturaService, private ModalProductService: ModalFacturaService) {
    this.facturaService.getFacturas().subscribe((data: any) => {
      this.facturas = data;
    });
   }

  ngOnInit() {
    this.ModalProductService.notificarCambio.subscribe(factura => {
      if (this.tipo === 'new') {
        this.facturas.push(factura);
      } else if (this.tipo === 'update') {
        this.facturas = this.facturas.map(facturaOriginal => {
          if (factura.codigofactura === facturaOriginal.codigofactura) {
            facturaOriginal = factura;
          }
          return facturaOriginal;
        });
      }
    });
  }

  delete(factura: Factura): void {
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
        this.facturaService.delete(factura.numeroFactura).subscribe(
          () => {
            this.facturas = this.facturas.filter(prod => prod !== factura);
            Swal.fire('factura eliminado', `factura ${factura.numeroFactura} eliminado correctamente`, 'success');
          }
        );
      });
    }

    abrirModal(factura?: Factura) {
      if (factura) {
        this.facturaSeleccionado = factura;
        this.tipo = 'update';
      } else {
        this.tipo = 'new';
        this.facturaSeleccionado = new Factura();
      }
      this.ModalProductService.abrirModal();
    }

}
