import { TestBed } from '@angular/core/testing';

import { ModalTipoEmpaqueService } from './modal-tipo-empaque.service';

describe('ModalTipoEmpaqueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalTipoEmpaqueService = TestBed.get(ModalTipoEmpaqueService);
    expect(service).toBeTruthy();
  });
});
