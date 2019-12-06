import { Component, OnInit, Input } from '@angular/core';
import { TipoEmpaque } from '../tipo-empaque';
import { TipoEmpaquesService } from '../service/tipo-empaques-service.service';
import { ModalTipoEmpaqueService } from '../modal-tipo-empaque.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { TipoEmpaqueCreacionDTO } from '../tipo-empaque-creacion-dto';

@Component({
  selector: 'app-tipo-empaque-form',
  templateUrl: './tipo-empaque-form.component.html',
  styleUrls: ['./tipo-empaque-form.component.css']
})
export class TipoEmpaqueFormComponent implements OnInit {
  titulo: string;
  @Input() tipoEmpaque: TipoEmpaque;

  constructor(
    private tipoEmpaqueService: TipoEmpaquesService,
    private router: Router,
    private modalTipoEmpaqueService: ModalTipoEmpaqueService
  ) { this.titulo = 'Agregar Tipo de Empaque'; }

  ngOnInit() {
  }

  create(): void {
    const nuevo = new TipoEmpaqueCreacionDTO();
    nuevo.descripcion = this.tipoEmpaque.descripcion;
    this.tipoEmpaqueService.create(nuevo).subscribe(
      tipoEmpaque => {
        Swal.fire('Nuevo tipo de empaque', `El tipo de empaque ${this.tipoEmpaque.descripcion} ha sido creado correctamente`,
        'success');
        this.modalTipoEmpaqueService.notificarCambio.emit(tipoEmpaque);
        this.modalTipoEmpaqueService.cerrarModal();
        this.router.navigate(['/tipoEmpaque']);
      },
      error => {
        Swal.fire('Nuevo Tipo Empaque', `Error code ${error.status}`, 'error')
        }
    )
  }

  update(): void {
    const nuevo = new TipoEmpaqueCreacionDTO();
    nuevo.descripcion = this.tipoEmpaque.descripcion;
    this.tipoEmpaqueService.update(this.tipoEmpaque.codigoEmpaque, nuevo).subscribe(
      () => {
        Swal.fire('Actualizar tipo de empaque', `El tipo de empaque ${nuevo.descripcion}
        ha sido actualizado`, 'success');
        this.modalTipoEmpaqueService.notificarCambio.emit(this.tipoEmpaque);
        this.modalTipoEmpaqueService.cerrarModal();
        this.router.navigate(['/tipoEmpaque']);
      }
    );
  }

  cerrarModal(): void {
    this.modalTipoEmpaqueService.cerrarModal();
  }

}
