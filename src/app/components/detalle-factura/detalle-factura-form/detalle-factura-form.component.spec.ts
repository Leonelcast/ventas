import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleFacturaFormComponent } from './detalle-factura-form.component';

describe('DetalleFacturaFormComponent', () => {
  let component: DetalleFacturaFormComponent;
  let fixture: ComponentFixture<DetalleFacturaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleFacturaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleFacturaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
