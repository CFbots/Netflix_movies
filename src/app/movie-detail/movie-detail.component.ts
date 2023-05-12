import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { MovieDetail } from '../interface/movie-detail.interface';
import { Video } from '../interface/video.interface';
import { Cast } from '../interface/cast.interface';
import { Backdrop, Poster } from '../interface/movie-image.interface';
import { YouTubePlayer } from '@angular/youtube-player';
import { TrailerYoutubeComponent } from './trailer-youtube/trailer-youtube.component';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit{
  @ViewChild(YouTubePlayer, { static: true }) youTubePlayer!: YouTubePlayer;

  hasBackdrop_img = true;
  background_imge = '';
  type!: string | undefined;
  movie!: MovieDetail;
  movieVideos: Video[] = [];
  actors: Cast[] = [];
  posters: Poster[] = [];
  id!: number;
  currentDialogRef!: MatDialogRef<TrailerYoutubeComponent>;

  constructor(
    private movieService: MovieService,
    private readonly activatedRoute: ActivatedRoute,
    private dialog: MatDialog
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
        this.hasBackdrop_img = true;
      } else {
        this.background_imge = "";
        this.hasBackdrop_img = false;
      }
      // console.log("getting the movie!", this.movie);
      // console.log("getting the movie title!", this.movie.title);
    });

    this.getMovieSource();
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.hasBackdrop = true;
    dialogConfig.closeOnNavigation = true;

    const dialogRef = this.dialog.open(TrailerYoutubeComponent, {
      data: {
        movieVideos: this.movieVideos,
        hasbackdrop_img: this.hasBackdrop_img,
        background_imge: this.background_imge,
      },
      maxWidth: '100vw',
    });
    this.currentDialogRef = dialogRef;
  }
  
  private getMovieSource() {
    this.movieService.getMovieInfo(this.id, 'videos').subscribe(videos => {
      if (videos && videos.results) {
        this.movieVideos = [...videos.results];
        // console.log("getting the movieVideos!", this.movieVideos);
      }
    });

    this.movieService.getMovieInfo(this.id, 'credits').subscribe(actors => {
      this.actors = actors.cast.map((actor: Cast): Cast => {
        const profile_path = actor.profile_path? this.movieService.getMovieImagePath(actor.profile_path, 'w500') : '';
        return {...actor, profile_path};
      })
      // console.log("getting the actor!", this.actors);
    });

    this.movieService.getMovieInfo(this.id, 'images').subscribe(backdrops => {
      this.posters = backdrops.backdrops.map((backdrop: Backdrop): Backdrop => {
        const file_path = backdrop.file_path? this.movieService.getMovieImagePath(backdrop.file_path, 'w500') : '';
        return {...backdrop, file_path};
      })
      // console.log("getting the images!", this.posters);
    });
  }

  ngOnDestroy(): void {
    if (this.currentDialogRef && this.currentDialogRef.componentInstance) {
      this.currentDialogRef.close();
    }
  }
}
