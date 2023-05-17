import { TestBed } from '@angular/core/testing';

import { MovieCreditResolveService } from './movie-credit-resolve.service';

describe('MovieCreditResolveServiceService', () => {
  let service: MovieCreditResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieCreditResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
