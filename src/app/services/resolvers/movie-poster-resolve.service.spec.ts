import { TestBed } from '@angular/core/testing';

import { MoviePosterResolveService } from './movie-poster-resolve.service';

describe('MoviePosterResolveService', () => {
  let service: MoviePosterResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviePosterResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
