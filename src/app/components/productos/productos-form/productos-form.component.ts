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
  @Input() producto: Producto; //se utiliza imput cuando se esta modificando
  categorias: Categoria[];

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
    this.categoriaService.getCategorias().subscribe((response: any) => this.categorias = response as Categoria[]);
    this.tipoEmpaqueService.getTipoEmpaques().subscribe(tipoEmpaques => this.tipoEmpaques = tipoEmpaques);
  }
  //las 3 cosas que espera recibir son los que esta en productoCreacionDTO son los codigos y la descripcion 
  //esto sirve para optimizar los recursos ya que no se utilizan todos los recursos de productos 
  create(): void {
    const nuevo = new ProductoCreacionDTO();
    nuevo.codigoCategoria = this.producto.categoria.codigoCategoria;
    nuevo.codigoEmpaque = this.producto.tipoEmpaque.codigoEmpaque;
    nuevo.descripcion = this.producto.descripcion;
    this.productoService.create(nuevo).subscribe(
      producto => {
        swal.fire(' Nuevo Producto', `El producto ${producto.descripcion} ha sido creado con exito!!`, 'success');
        producto.categoria = this.producto.categoria;
        producto.tipoEmpaque = this.producto.tipoEmpaque;
        this.modalProductoService.notificarCambio.emit(producto);//agrega un elemento, este hace un push 
        this.modalProductoService.cerrarModal();
        this.router.navigateByUrl('/productos');
      },
      error => {
        swal.fire('Nuevo producto', `Error code ${error.status}`, 'error')
      }

    );
  }
  update(): void {
    const nuevo = new ProductoCreacionDTO();
    nuevo.codigoCategoria = this.producto.codigoCategoria;
    nuevo.codigoEmpaque = this.producto.codigoEmpaque;
    nuevo.descripcion = this.producto.descripcion;
    this.productoService.update(this.producto.codigoProducto, nuevo).subscribe(
      () => {
        swal.fire('Actualizar Producto', `El producto ${nuevo.descripcion} ha sido actualizado!!`, 'success');
        this.modalProductoService.notificarCambio.emit(this.producto);
        this.modalProductoService.cerrarModal();
        this.router.navigate(['/productos']);
      }
    );
  }
  cerrarModal(): void {
    this.modalProductoService.cerrarModal();
  }
//? es como un if en la misma linea 
//valor original comparandolo con un valor del box
  compararCategoria(o1: Categoria, o2: Categoria): boolean {
    if (o1 === undefined && o2 === undefined) {
      return true;
    }
    return o1 === null || o2 === null || o1 === undefined 
    || o2 === undefined ? false : o1.codigoCategoria === o2.codigoCategoria;

  }
  compararTipoEmpaque(o1: TipoEmpaque, o2: TipoEmpaque): boolean {
    if (o1 === undefined && o2 === undefined) {
      return true;
    }
    return o1 === null || o2 === null || o1 === undefined 
    || o2 === undefined ? false : o1.codigoEmpaque === o2.codigoEmpaque;

  }
}
