import { TestBed } from '@angular/core/testing';

import { ModalFacturaService } from './modal-factura.service';

describe('ModalFacturaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalFacturaService = TestBed.get(ModalFacturaService);
    expect(service).toBeTruthy();
  });
});
