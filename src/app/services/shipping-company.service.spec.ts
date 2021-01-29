import { TestBed } from '@angular/core/testing';

import { ShippingCompanyService } from './shipping-company.service';

describe('ShippingCompanyServiceService', () => {
  let service: ShippingCompanyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShippingCompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
