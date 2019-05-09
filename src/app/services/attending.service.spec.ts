import { TestBed } from '@angular/core/testing';

import { AttendingService } from './attending.service';

describe('AttendingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AttendingService = TestBed.get(AttendingService);
    expect(service).toBeTruthy();
  });
});
