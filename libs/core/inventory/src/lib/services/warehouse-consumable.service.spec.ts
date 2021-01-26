import { TestBed } from '@angular/core/testing';

import { WarehouseConsumableService } from './warehouse-consumable.service';

describe('WarehouseConsumableService', () => {
  let service: WarehouseConsumableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarehouseConsumableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
