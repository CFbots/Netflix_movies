import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { MovieDetail } from '../interface/movie-detail.interface';
import { Video } from '../interface/video.interface';
import { Cast } from '../interface/cast.interface';
import { Backdrop, Poster } from '../interface/movie-image.interface';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit{
  hasPoster_img = true;
  hasBackdrop_img = true;
  poster_img_high = '';
  backdrop_img_high = '';
  type!: string | undefined;

  movie!: MovieDetail;
  movieVideos: Video[] = [];
  actors: Cast[] = [];
  posters: Poster[] = [];
  id!: number;

  constructor(
    private movieService: MovieService,
    private readonly activatedRoute: ActivatedRoute
    ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      // this.id = +paramMap.get('id');
      console.log("here is the id!:", paramMap.get('id'));
    })
  }

}
