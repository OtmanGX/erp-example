import { TestBed } from '@angular/core/testing';

import { WarehouseGlassService } from './warehouse-glass.service';

describe('WarehouseGlassService', () => {
  let service: WarehouseGlassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarehouseGlassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
