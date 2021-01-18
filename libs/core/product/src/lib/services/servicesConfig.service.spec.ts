import { TestBed } from '@angular/core/testing';

import { ServicesConfigService } from './servicesConfig.service';

describe('ServicesService', () => {
  let service: ServicesConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
