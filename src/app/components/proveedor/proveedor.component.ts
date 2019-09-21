import { Component, OnInit } from '@angular/core';
import { ProveedorServiceService } from "./service/proveedor-service.service";

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {
proveedores: any[]=[];
  constructor(private _proveedorService :ProveedorServiceService) { 
    this._proveedorService.getProveedores().subscribe((data: any)=>{
      this.proveedores =data;
    })
  }

  ngOnInit() {
  }

}
