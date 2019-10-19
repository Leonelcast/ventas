import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../producto';
import { Categoria } from '../../categorias/categoria';
import { TipoEmpaque } from '../../tipo-empaques/tipo-empaque';
import { CategoriaService } from '../../categorias/service/categoria-service.service';
import { TipoEmpaquesService } from '../../tipo-empaques/service/tipo-empaques-service.service';
import { ProductoService } from '../service/producto.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { ProductoCreacionDTO } from '../producto-creacion-dto';
import { ModalProductoService } from '../modal-producto.service';

@Component({
  selector: 'app-productos-form',
  templateUrl: './productos-form.component.html',
  styleUrls: ['./productos-form.component.css']
})
export class ProductosFormComponent implements OnInit {
  titulo: string;
 @Input() producto: ProductoCreacionDTO; //se utiliza imput cuando se esta modificando
  categorias: Categoria[];
  @Input() id:number;
  tipoEmpaques: TipoEmpaque[] = [];
  productoDTO: ProductoCreacionDTO = new ProductoCreacionDTO(); //se utiliza para crear, ya que tiene una nueva instancia 

  constructor(
    private productoService: ProductoService,
    private categoriaService: CategoriaService,
    private tipoEmpaqueService: TipoEmpaquesService,
    private router: Router, 
    private modalProductoService: ModalProductoService) {

  }

  ngOnInit() {
    this.categoriaService.getCategorias().subscribe(categorias => this.categorias = categorias);
    this.tipoEmpaqueService.getTipoEmpaques().subscribe(tipoEmpaques => this.tipoEmpaques = tipoEmpaques);
  }
  create(): void {
    this.productoService.create(this.productoDTO).subscribe(
      producto => {
        this.router.navigate(['/productos']);
        swal.fire('Nuevo producto', `El producto ${this.producto.descripcion} ha sido creado con exito!!`, 'success');
        this.modalProductoService.cerrarModal();
        this.producto=null;
      },
      error => {
        swal.fire('Nuevo producto', `Error code ${error.status}`, 'error')
      }
    ); 
  }
  update(): void{
    this.productoService.update(this.id, this.producto).subscribe(
      producto =>{
      this.router.navigate(['/productos']);
      swal.fire('Actualizar Producto', `El producto ${this.producto.descripcion} ha sido actualizado!!`, 'success');
      this.modalProductoService.cerrarModal();
      this.producto=null;
      }
    );
  }
  cerrarModal(): void{
    this.modalProductoService.cerrarModal();
    this.producto = null;
  }
}
