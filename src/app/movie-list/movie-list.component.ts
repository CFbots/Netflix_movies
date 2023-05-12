import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../interface/movie.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit{
  movies: Movie[] = [];
  movies$!: Observable<Movie[]>;

  constructor(private movieService: MovieService){ }
  ngOnInit(): void {
    this.movieService.getMovie().subscribe((movie)=>{
      // console.log("from movie list!", movie);
      this.movies = movie.results});
  }
  
}
