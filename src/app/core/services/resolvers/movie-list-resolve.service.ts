import { Injectable } from '@angular/core';
import { MovieService } from '../movie/movie.service';
import { Router, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DiscoverMovie } from 'src/app/interface/discoverMovie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieListResolveService implements Resolve<any>{
    private discoverMovieYear: DiscoverMovie = {
        year: 2023
      };
    
  constructor(private movieService: MovieService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.movieService.discoverMovie(this.discoverMovieYear);
  }
}
