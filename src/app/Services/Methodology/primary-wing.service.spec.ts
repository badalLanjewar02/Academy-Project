import { TestBed } from '@angular/core/testing';

import { PrimaryWingService } from './primary-wing.service';

describe('PrimaryWingService', () => {
  let service: PrimaryWingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimaryWingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
