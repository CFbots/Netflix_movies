import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/services/movie/movie.service';
import { Movie } from '../../interface/movie.interface';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit{
  movies: Movie[] = [];

  constructor(private activatedRoute: ActivatedRoute){ }
  ngOnInit(): void {
    this.movies = this.activatedRoute.snapshot.data['movielists'].results;
    // this.movieService.getMovie().subscribe((movie)=>{
    //   this.movies = movie.results});
  }
}
