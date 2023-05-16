import { Inject, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, map, tap } from 'rxjs';
import { Movie } from '../../interface/movie.interface';
import { DiscoverMovie } from '../../interface/discoverMovie.interface';
import { ApiKey, MovieImgBaseUrl, MovieUrl, TmdbBaseUrl } from 'src/app/core/core.module';

@Injectable({
  providedIn: 'root'
})
export class MovieService implements OnInit{
  movielist$ = new Subject<Movie[]>();
  private readonly moviePath = 'movie';

  private baseDiscoverMovie: DiscoverMovie = {
    page: 1,
    language: 'en-US',
    sort_by: 'popularity.desc',
    include_adult: false,
    include_video: false,
    with_watch_monetization_types: 'flatrate',
  };


  constructor(private http: HttpClient,
    @Inject(MovieUrl) private movieUrl: string,
    @Inject(TmdbBaseUrl) private tmdbBaseUrl:string,
    @Inject(MovieImgBaseUrl) private movieImgBaseUrl:string,
    @Inject(ApiKey) private apiKey: string
    ) {}

  ngOnInit(): void {
    
  }

  getMovie(){
    return this.http.get(this.movieUrl).pipe(
      tap((movies: any)=>{
        this.movielist$.next(movies.results);
      })
    )
  }

  getMovieInfo(id: number, item: string =''): Observable<any> {
    let url = ''
    if (!item) {
      url = [this.tmdbBaseUrl, this.moviePath, id].join('/') + '?api_key=' + this.apiKey;
    } else {
      url = [this.tmdbBaseUrl, this.moviePath, id, item].join('/') + '?api_key=' + this.apiKey;
    }
    // console.log("gettting the movie Info!", item, url);
    return this.http.get(url);
  }

  getMovieImagePath(path: string, quality: string): string {
    return [this.movieImgBaseUrl, quality, path].join('/');
  }

}
