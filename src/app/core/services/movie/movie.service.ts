import { Inject, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, map, tap } from 'rxjs';
import { Movie } from '../../../interface/movie.interface';
import { DiscoverMovie, SearchMovieReturn } from '../../../interface/discoverMovie.interface';
import { ApiKey, MovieImgBaseUrl, TmdbBaseUrl } from 'src/app/core/core.module';

@Injectable({
  providedIn: 'root'
})
export class MovieService implements OnInit{
  private readonly moviePath = 'movie';
  private readonly discoverMoviePath = 'discover/movie?';

  private movieList: Movie[] = [];
  private movieList$ = new BehaviorSubject(this.movieList);
  movieListObs$ = this.movieList$.asObservable();
  private currentPage = 1;
  private baseDiscoverMovie: DiscoverMovie = {
    api_key:this.apiKey,
    page:this.currentPage,
    language: 'en-US',
    sort_by: 'popularity.desc',
    include_adult: false,
    include_video: false,
  };


  constructor(private http: HttpClient,
    @Inject(TmdbBaseUrl) private tmdbBaseUrl:string,
    @Inject(MovieImgBaseUrl) private movieImgBaseUrl:string,
    @Inject(ApiKey) private apiKey: string
    ) {}

  ngOnInit(): void {}

  discoverMovie(search: DiscoverMovie){
    const discoverMovie: DiscoverMovie = {...this.baseDiscoverMovie, ...search};
    let url = this.tmdbBaseUrl + '/' + this.discoverMoviePath;
    Object.entries(discoverMovie).forEach(([key, value]) => {
      url += `&${key}=${value}`;
    })
    // console.log("here is the url:", url);
    return this.http.get<SearchMovieReturn>(url).pipe(
      tap(data => {
        if (!this.movieList.length) {
          this.movieList = [...(data.results as Movie[])];
          this.movieList$.next(this.movieList);
        }
      })
    );
  }

  handleScroll() {
    const discoverMovie = {...this.baseDiscoverMovie, page: ++this.currentPage};
    let url = this.tmdbBaseUrl + '/' + this.discoverMoviePath;
    Object.entries(discoverMovie).forEach(([key, value]) => {
      url += `&${key}=${value}`;
    })
    return this.http.get<SearchMovieReturn>(url).pipe(
      tap(data => {
        this.movieList = [...this.movieList, ...(data.results as Movie[])];
        this.movieList$.next(this.movieList);
      })
    );
  }

  getMovieInfo(id: number, item: string =''): Observable<any> {
    //for movie detail
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
