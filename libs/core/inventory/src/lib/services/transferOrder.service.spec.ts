import { TestBed } from '@angular/core/testing';

import { TransferOrderService } from './transferOrder.service';

describe('TransferService', () => {
  let service: TransferOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
