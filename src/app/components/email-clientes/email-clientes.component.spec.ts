import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailClientesComponent } from './email-clientes.component';

describe('EmailClientesComponent', () => {
  let component: EmailClientesComponent;
  let fixture: ComponentFixture<EmailClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
