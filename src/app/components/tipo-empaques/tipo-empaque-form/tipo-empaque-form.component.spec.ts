import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEmpaqueFormComponent } from './tipo-empaque-form.component';

describe('TipoEmpaqueFormComponent', () => {
  let component: TipoEmpaqueFormComponent;
  let fixture: ComponentFixture<TipoEmpaqueFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoEmpaqueFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoEmpaqueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
