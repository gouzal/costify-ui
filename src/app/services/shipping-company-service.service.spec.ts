import { TestBed } from '@angular/core/testing';

import { ShippingCompanyServiceService } from './shipping-company-service.service';

describe('ShippingCompanyServiceService', () => {
  let service: ShippingCompanyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShippingCompanyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
