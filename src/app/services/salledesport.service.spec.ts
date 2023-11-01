import { TestBed } from '@angular/core/testing';

import { SalledesportService } from './salledesport.service';

describe('SalledesportService', () => {
  let service: SalledesportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalledesportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
