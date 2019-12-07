import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonoClientesComponent } from './telefono-clientes.component';

describe('TelefonoClientesComponent', () => {
  let component: TelefonoClientesComponent;
  let fixture: ComponentFixture<TelefonoClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelefonoClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefonoClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
