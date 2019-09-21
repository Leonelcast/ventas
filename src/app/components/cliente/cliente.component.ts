import { Component, OnInit } from '@angular/core';
import { ClienteService } from "./service/cliente-service.service";
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: any[] =[];
  constructor(private _clienteService: ClienteService) { 
    this._clienteService.getClientes().subscribe((data:any)=>{
      this.clientes = data;
    });
  }

  ngOnInit() {
  }

}
