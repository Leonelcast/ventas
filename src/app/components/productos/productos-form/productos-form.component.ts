import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { Categoria } from '../../categorias/categoria';
import { TipoEmpaque } from '../../tipo-empaques/tipo-empaque';
import { CategoriaService } from '../../categorias/service/categoria-service.service';
import { TipoEmpaquesService } from '../../tipo-empaques/service/tipo-empaques-service.service';
import { ProductoService } from '../service/producto.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-productos-form',
  templateUrl: './productos-form.component.html',
  styleUrls: ['./productos-form.component.css']
})
export class ProductosFormComponent implements OnInit {
  titulo: string;
  producto: Producto = new Producto();
  categorias: Categoria[];
  tipoEmpaques: TipoEmpaque[] = [];
  constructor(
    private productoService: ProductoService,
    private categoriaService: CategoriaService,
    private tipoEmpaqueService: TipoEmpaquesService,
    private router: Router) {

  }

  ngOnInit() {
    this.categoriaService.getCategorias().subscribe(categorias => this.categorias = categorias);
    this.tipoEmpaqueService.getTipoEmpaques().subscribe(tipoEmpaques => this.tipoEmpaques = tipoEmpaques);
  }
  create(): void{
    this.productoService.create(this.producto).subscribe(
      producto =>{
        this.router.navigate(['/productos']);
        swal.fire('Nuevo producto', `El producto ${this.producto.descripcion} ha sido creado con exito!!`,'success')
      },
      error=> {
        swal.fire('Nuevo producto', `Error code ${error.status}`, 'error')
      }
    )
  }

}
