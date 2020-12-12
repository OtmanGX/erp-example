import { TestBed } from '@angular/core/testing';

import { ManagerCommandesService } from './manager-commandes.service';

describe('ManagerCommandesService', () => {
  let service: ManagerCommandesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerCommandesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
