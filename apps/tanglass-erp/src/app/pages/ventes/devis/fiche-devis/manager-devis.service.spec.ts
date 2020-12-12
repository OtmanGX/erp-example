import { TestBed } from '@angular/core/testing';

import { ManagerDevisService } from './manager-devis.service';

describe('ManagerDevisService', () => {
  let service: ManagerDevisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerDevisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
