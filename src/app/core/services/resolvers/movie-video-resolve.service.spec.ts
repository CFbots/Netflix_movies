import { TestBed } from '@angular/core/testing';

import { MovieVideoResolveService } from './movie-video-resolve.service';

describe('MovieVideoResolveService', () => {
  let service: MovieVideoResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieVideoResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
