import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../interface/interface';
import { ImgUrl, MovieUrl } from '../app.module';


@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit{
  @Input('movie')movie!:Movie;

  constructor(
    @Inject(ImgUrl) private imgUrl: string,
    private router: Router
    ) {}
  ngOnInit(): void {
    // console.log(this.movie);
    this.movie.poster_path = this.imgUrl + this.movie.poster_path;
  } 
  goToDetailPage() {
    this.router.navigate(['movie-list', this.movie.id])
  }
}
