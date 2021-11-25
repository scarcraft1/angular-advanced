import { TestBed } from '@angular/core/testing';

import { SelectorCiudadesService } from './selector-ciudades.service';

describe('SelectorCiudadesService', () => {
  let service: SelectorCiudadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectorCiudadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
