import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './service/categoria-service.service';
import { Categoria } from './categoria';
import Swal from 'sweetalert2';
import { ModalCategoriaService } from './modal-categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categorias: Categoria[];
  paginador: any;
  //el response tiene la nueva data, que el content se vuelva un objeto categoria
  constructor(private _categoriaService: CategoriaService) {
      this._categoriaService.getCategorias().subscribe((response:any) =>{
      this.categorias = response.content as Categoria[];
      this.paginador = response;
    });
   }

  ngOnInit() {
    
  }
}
