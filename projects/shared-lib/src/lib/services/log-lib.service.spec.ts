import { TestBed } from '@angular/core/testing';

import { LogLibService } from './log-lib.service';

describe('LogLibService', () => {
  let service: LogLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
