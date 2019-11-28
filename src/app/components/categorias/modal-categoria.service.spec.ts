import { TestBed } from '@angular/core/testing';

import { ModalCategoriaService } from './modal-categoria.service';

describe('ModalCategoriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalCategoriaService = TestBed.get(ModalCategoriaService);
    expect(service).toBeTruthy();
  });
});
