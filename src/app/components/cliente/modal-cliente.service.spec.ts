import { TestBed } from '@angular/core/testing';

import { ModalClienteService } from './modal-cliente.service';

describe('ModalClienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalClienteService = TestBed.get(ModalClienteService);
    expect(service).toBeTruthy();
  });
});
