import { Inject, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MovieUrl } from '../app.module';
import { BehaviorSubject, Observable, Subject, map, tap } from 'rxjs';
import { Movie } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService implements OnInit{
  movielist: Movie[] = [];
  movielist$ = new Subject<Movie[]>();

  constructor(private http: HttpClient,
    @Inject(MovieUrl) private movieUrl: string
    ) {}

  ngOnInit(): void {
    
  }

  getMovie(){
    console.log("hi!");
    return this.http.get(this.movieUrl).pipe(
      tap((movies: any)=>{
        // console.log(movies.results);
        this.movielist = movies.results;
        this.movielist$.next(this.movielist);
      })
    )
  }
}
