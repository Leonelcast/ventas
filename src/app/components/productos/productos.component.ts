import { Component, OnInit } from '@angular/core';
import { ProductoService } from './service/producto.service';
import { Producto } from './producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
   productos: any[];
  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.getProductos().subscribe((data:any)=> this.productos = data);
  }

}
