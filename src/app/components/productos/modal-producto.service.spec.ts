import { TestBed } from '@angular/core/testing';

import { ModalProductoService } from './modal-producto.service';

describe('ModalProductoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalProductoService = TestBed.get(ModalProductoService);
    expect(service).toBeTruthy();
  });
});
