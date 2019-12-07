import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonoProveedoresComponent } from './telefono-proveedores.component';

describe('TelefonoProveedoresComponent', () => {
  let component: TelefonoProveedoresComponent;
  let fixture: ComponentFixture<TelefonoProveedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelefonoProveedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefonoProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
