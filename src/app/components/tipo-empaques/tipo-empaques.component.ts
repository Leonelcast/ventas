import { Component, OnInit } from '@angular/core';
import { TipoEmpaquesService } from './service/tipo-empaques-service.service';
import { TipoEmpaque } from './tipo-empaque';
import { ModalTipoEmpaqueService } from './modal-tipo-empaque.service';
import { TipoEmpaqueCreacionDTO } from './tipo-empaque-creacion-dto';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-tipo-empaques',
  templateUrl: './tipo-empaques.component.html',
  styleUrls: ['./tipo-empaques.component.css']
})
export class TipoEmpaquesComponent implements OnInit {
  tipoEmpaques: any[];
  tipoEmpaqueSeleccionado: TipoEmpaque;
  tipo: string;

  constructor(private tipoEmpaqueService: TipoEmpaquesService, private ModalTipoEmpaqueService: ModalTipoEmpaqueService) {
    this.tipoEmpaqueService.getTipoEmpaques().subscribe((data: any) => {
      this.tipoEmpaques = data;
    });
   }

  ngOnInit() {
    this.ModalTipoEmpaqueService.notificarCambio.subscribe(tipoEmpaque => {
      if (this.tipo === 'new') {
        this.tipoEmpaques.push(TipoEmpaque);
      } else if (this.tipo === 'update') {
        this.tipoEmpaques = this.tipoEmpaques.map(tipoEmpaquesOriginal => {
          if (tipoEmpaque.codigoEmpaque === tipoEmpaquesOriginal.codigoEmpaque) {
            tipoEmpaquesOriginal = tipoEmpaque;
          }
          return tipoEmpaquesOriginal;
        });
      }
    });
  }

  delete(tipoEmpaque: TipoEmpaque): void {
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
        this.tipoEmpaqueService.delete(tipoEmpaque.codigoEmpaque).subscribe(
          () => {
            this.tipoEmpaques = this.tipoEmpaques.filter(prod => prod !== tipoEmpaque);
            Swal.fire('Tipo Emapque eliminado', `Tipo Empaque ${tipoEmpaque.descripcion} eliminado correctamente`, 'success');
          }
        );
      });
    }

    abrirModal(tipoEmpaque?: TipoEmpaque) {
      if (tipoEmpaque) {
        this.tipoEmpaqueSeleccionado = tipoEmpaque;
        this.tipo = 'update';
      } else {
        this.tipo = 'new';
        this.tipoEmpaqueSeleccionado = new TipoEmpaque();
      }
      this.ModalTipoEmpaqueService.abrirModal();
    }
}
