import { Inject, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MovieImgBaseUrl, MovieUrl, TmdbBaseUrl } from '../app.module';
import { BehaviorSubject, Observable, Subject, map, tap } from 'rxjs';
import { Movie } from '../interface/interface';
import { DiscoverMovie } from '../interface/discoverMovie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService implements OnInit{
  // movielist: Movie[] = [];
  movielist$ = new Subject<Movie[]>();
  private readonly moviePath = 'movie';
  private readonly api_key = '903ebd52027fe49503e599459ee42446';

  private baseDiscoverMovie: DiscoverMovie = {
    api_key: this.api_key,
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
    ) {}

  ngOnInit(): void {
    
  }

  getMovie(){
    return this.http.get(this.movieUrl).pipe(
      tap((movies: any)=>{
        // this.movielist = movies.results;
        // console.log("movie service:", this.movielist);
        this.movielist$.next(movies.results);
      })
    )
  }

  getMovieInfo(id: number, item: string =''): Observable<any> {
    let url = ''
    if (!item) {
      url = [this.tmdbBaseUrl, this.moviePath, id].join('/') + '?api_key=' + this.api_key;
    } else {
      url = [this.tmdbBaseUrl, this.moviePath, id, item].join('/') + '?api_key=' + this.api_key;
    }
    console.log("gettting the movie Info!", item, url);
    return this.http.get(url);
  }

  getMovieImagePath(path: string, quality: string): string {
    return [this.movieImgBaseUrl, quality, path].join('/');
  }

}
