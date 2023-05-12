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
  // poster_img_high = '';
  background_imge = '';
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
    this.activatedRoute.paramMap.subscribe(param => {
      this.id = Number(param.get('id'));
    })

    this.movieService.getMovieInfo(this.id).subscribe(movie => {
      this.movie = movie;
      this.type = this.movie.genres?.map(({ name }) => name).join(', ');
      if(this.movie.backdrop_path){
        this.background_imge = this.movieService.getMovieImagePath(this.movie.backdrop_path,'original');
      } else {
        this.background_imge = "";
      }
      console.log("getting the movie!", this.movie);
      console.log("getting the movie title!", this.movie.title);
    });

    this.getMovieSource();
  }
  
  private getMovieSource() {
    this.movieService.getMovieInfo(this.id, 'videos').subscribe(videos => {
      if (videos && videos.results) {
        this.movieVideos = [...videos.results];
        console.log("getting the movieVideos!", this.movieVideos);
      }
    });

    this.movieService.getMovieInfo(this.id, 'credits').subscribe(actors => {
      this.actors = actors.cast.map((actor: Cast): Cast => {
        const profile_path = actor.profile_path? this.movieService.getMovieImagePath(actor.profile_path, 'w500') : '';
        return {...actor, profile_path};
      })
      console.log("getting the actor!", this.actors);
    });

    this.movieService.getMovieInfo(this.id, 'images').subscribe(backdrops => {
      this.posters = backdrops.backdrops.map((backdrop: Backdrop): Backdrop => {
        const file_path = backdrop.file_path? this.movieService.getMovieImagePath(backdrop.file_path, 'w500') : '';
        return {...backdrop, file_path};
      })
      console.log("getting the images!", this.posters);
    });

    // if (this.movie?.backdrop_path) {
    //   // console.log("here is the backdrop!", this.movie.backdrop_path);
    //   this.hasBackdrop_img = true;
    //   this.backdrop_img_high = this.movieService.getMovieImagePath(
    //     this.movie.backdrop_path,
    //     'original'
    //   );
    //   console.log("here is the backdrop_img_high", this.backdrop_img_high);
    // } else {
    //   this.hasBackdrop_img = false;
    // }
    
    // if (this.movie?.poster_path) {
    //   this.hasPoster_img = true;
    //   this.poster_img_high = this.movieService.getMovieImagePath(
    //     this.movie.poster_path,
    //     'w780'
    //   );
    // } else {
    //   this.hasPoster_img = false;
    // }
  }
}
