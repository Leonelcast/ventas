import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailProveedoresComponent } from './email-proveedores.component';

describe('EmailProveedoresComponent', () => {
  let component: EmailProveedoresComponent;
  let fixture: ComponentFixture<EmailProveedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailProveedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
