import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Video } from 'src/app/interface/video.interface';

@Component({
  selector: 'app-trailer-youtube',
  templateUrl: './trailer-youtube.component.html',
  styleUrls: ['./trailer-youtube.component.scss']
})
export class TrailerYoutubeComponent implements OnInit{
  movieVideos: Video[] = [];
  hasPoster_img = true;
  hasBackdrop_img = true;
  poster_img_high = '';
  backdrop_img_high = '';

  constructor(
    private dialogRef: MatDialogRef<TrailerYoutubeComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any) {}

  ngOnInit(): void {
    this.movieVideos = this.data.movieVideos;
    this.hasPoster_img = this.data.hasPoster_img;
    this.hasBackdrop_img = this.data.hasBackdrop_img;
    this.poster_img_high = this.data.poster_img_high;
    this.backdrop_img_high = this.data.backdrop_img_high;

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  switchVideo(direction: string) {
    if (direction === 'left' && this.movieVideos.length) {
      const removedVideo: Video = this.movieVideos.shift() as Video;
      this.movieVideos.push(removedVideo);
    } else if (direction === 'right' && this.movieVideos.length) {
      const removedVideo: Video = this.movieVideos.pop() as Video;
      this.movieVideos.unshift(removedVideo);
    }
  }
}
