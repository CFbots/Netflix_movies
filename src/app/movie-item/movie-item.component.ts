import { Component, Inject, Input, OnInit } from '@angular/core';
import { Movie } from '../interface/interface';
import { ImgUrl, MovieUrl } from '../app.module';


@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit{
  @Input('movie')movie!:Movie;
  // img:string = 'https://image.tmdb.org/t/p/w440_and_h660_face/kuf6dutpsT0vSVehic3EZIqkOBt.jpg';

  constructor(@Inject(ImgUrl) private imgUrl: string) {}
  ngOnInit(): void {
    this.movie.poster_path = this.imgUrl + this.movie.poster_path;
  }
  // getBackgroundImageUrl(){
  //   return `url(${this.img})` 
  // }
  
}
