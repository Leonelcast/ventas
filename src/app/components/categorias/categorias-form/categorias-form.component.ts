import { Component, OnInit, Input } from '@angular/core';
import { Categoria } from '../categoria';
import { CategoriaService } from '../service/categoria-service.service';
import { Router } from '@angular/router';
import { ModalCategoriaService } from '../modal-categoria.service';
import { CategoriaCreacionDTO } from '../categorias-creacion-dto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categorias-form',
  templateUrl: './categorias-form.component.html',
  styleUrls: ['./categorias-form.component.css']
})
export class CategoriasFormComponent implements OnInit {
  titulo: string;
  @Input() categoria: Categoria;
  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private modalCategoriaService: ModalCategoriaService
  ) { }

  ngOnInit() {
  }
  create(): void{
    const nuevo = new CategoriaCreacionDTO();
    nuevo.descripcion = this.categoria.descripcion;
    this.categoriaService.create(nuevo).subscribe(
      categoria=>{
        Swal.fire(' Nuevo Categoria', `La Categoria ${categoria.descripcion} ha sido creado con exito!!`, 'success');
        this.modalCategoriaService.notificarCambio.emit(categoria);//agrega un elemento, este hace un push 
        this.modalCategoriaService.cerrarModal();
        this.router.navigateByUrl('/categorias');
        
      },
      error =>{
        Swal.fire('Nuevo categoria', `Error code ${error.status}`, 'error')
      }
    )
  }
  update(): void{
    const nuevo = new CategoriaCreacionDTO();
    nuevo.descripcion= this.categoria.descripcion;
    this.categoriaService.update(this.categoria.codigoCategoria, nuevo).subscribe(
      ()=>{
        
      Swal.fire('Actualizar Producto', `Categoria ${nuevo.descripcion} ha sido actualizado!!`, 'success');
      this.modalCategoriaService.notificarCambio.emit(this.categoria);
      this.modalCategoriaService.cerrarModal();
      this.router.navigate(['/categorias']);
    
    }
    )
  }
  cerrarModal(): void{
    this.modalCategoriaService.cerrarModal();
  }
}
