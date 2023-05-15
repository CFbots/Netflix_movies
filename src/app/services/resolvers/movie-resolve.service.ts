import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { MovieService } from '../movie/movie.service';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieResolveService {

  constructor(private movieService: MovieService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.movieService.getMovieInfo(+route.params['id'])
  }
}
