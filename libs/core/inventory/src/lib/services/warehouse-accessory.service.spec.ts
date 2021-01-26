import { TestBed } from '@angular/core/testing';

import { WarehouseAccessoryService } from './warehouse-accessory.service';

describe('WarehouseAccessoryService', () => {
  let service: WarehouseAccessoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarehouseAccessoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
