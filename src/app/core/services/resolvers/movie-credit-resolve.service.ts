import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { MovieService } from '../movie/movie.service';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieCreditResolveService implements Resolve<any>{

  constructor(private movieService: MovieService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.movieService.getMovieInfo(+route.params['id'], 'credits').pipe(
      map((credits) => {
        return credits.cast?.slice(0, 10);
      })
    )
  }
}
