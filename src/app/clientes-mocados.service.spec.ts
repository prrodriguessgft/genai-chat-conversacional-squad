import { TestBed } from '@angular/core/testing';

import { ClientesMocadosService } from './clientes-mocados.service';

describe('ClientesMocadosService', () => {
  let service: ClientesMocadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientesMocadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
