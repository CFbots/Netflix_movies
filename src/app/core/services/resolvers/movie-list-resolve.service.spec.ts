import { TestBed } from '@angular/core/testing';
import { MovieListResolveService } from './movie-list-resolve.service';



describe('MovieListResolveService', () => {
  let service: MovieListResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieListResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
