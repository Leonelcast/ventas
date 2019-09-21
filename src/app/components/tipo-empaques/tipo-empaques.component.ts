import { Component, OnInit } from '@angular/core';
import { TipoEmpaquesService } from './service/tipo-empaques-service.service';
@Component({
  selector: 'app-tipo-empaques',
  templateUrl: './tipo-empaques.component.html',
  styleUrls: ['./tipo-empaques.component.css']
})
export class TipoEmpaquesComponent implements OnInit {
tipoEmpaques: any[] = [];
  constructor(private _tipoEmpaqueService: TipoEmpaquesService) { 
    this._tipoEmpaqueService.getTipoEmpaques().subscribe((data:any)=>{
      this.tipoEmpaques =data;
    })

   }

  ngOnInit() {
  }

}