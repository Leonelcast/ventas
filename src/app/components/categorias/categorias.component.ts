import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './service/categoria-service.service';
import { Categoria } from './categoria';
import Swal from 'sweetalert2';
import { ModalCategoriaService } from './modal-categoria.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categorias: any[];
  paginador: any;
  categoriaSeleccionado: Categoria;
  tipo: string;

  //el response tiene la nueva data, que el content se vuelva un objeto categoria
  constructor(private _categoriaService: CategoriaService, private ModalCategoriaService: ModalCategoriaService, private activatedRoute: ActivatedRoute) {
   
   }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params=>{
      let page: number =+params.get('page');
      if(!page){
        page = 0;
      }
      this._categoriaService.getCategoriasPage(page).subscribe((response:any) =>{
        this.categorias = response.content as Categoria[];
        this.paginador = response;
      });
    })
    this.ModalCategoriaService.notificarCambio.subscribe(categoria =>{
      if(this.tipo ==='new'){
        this.categorias.push(categoria);
      
      }else if(this.tipo ==='update'){
        this.categorias = this.categorias.map(categoriaOriginal=>{
          if(categoria.codigoCategoria === categoriaOriginal.codigoCategoria){
            categoriaOriginal = categoria;
          }
          return categoriaOriginal;
        })
      }

    })
    
  }
  delete(categoria: Categoria): void {
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
        this._categoriaService.delete(categoria.codigoCategoria).subscribe(
          () => {
            this.categorias = this.categorias.filter(prod => prod !== categoria);
            Swal.fire('categoria eliminado', `categoria ${categoria.descripcion} eliminado correctamente`, 'success');
          }
        );
      });
    }
    abrirModal(categoria?: Categoria){
      if(categoria){
        this.categoriaSeleccionado = categoria;
        this.tipo = 'update';
      }else{
        this.tipo = 'new';
        this.categoriaSeleccionado = new Categoria();
      }
      this.ModalCategoriaService.abrirModal();
    }
}
