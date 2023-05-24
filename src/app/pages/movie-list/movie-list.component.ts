import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/services/movie/movie.service';
import { Movie } from '../../interface/movie.interface';
// import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DiscoverMovie } from 'src/app/interface/discoverMovie.interface';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit{
  // movies: Movie[] = [];
  movies$!: Observable<Movie[]>;
  isfinished: Boolean = true;

  private discoverMovieYear: DiscoverMovie = {
    year: 2023
  };

  constructor(
    private movieService: MovieService,
    // private activatedRoute: ActivatedRoute
    ){ }

  ngOnInit(): void {
    // this.movies = this.activatedRoute.snapshot.data['movielists'].results;
    this.movieService.discoverMovie(this.discoverMovieYear).subscribe();
    this.movies$ = this.movieService.movieListObs$;
  }

  onScroll() {
    this.movieService.handleScroll().subscribe(()=>this.isfinished = false);
    this.isfinished = true;
  }
}
