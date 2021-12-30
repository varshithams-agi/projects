import { TestBed } from '@angular/core/testing';

import { CreateaccService } from './createacc.service';

describe('CreateaccService', () => {
  let service: CreateaccService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateaccService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
