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
  hasBackdrop_img = true;
  background_imge = '';

  constructor(
    private dialogRef: MatDialogRef<TrailerYoutubeComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any) {}

  ngOnInit(): void {
    this.movieVideos = this.data.movieVideos;
    this.hasBackdrop_img = this.data.hasBackdrop_img;
    this.background_imge = this.data.background_imge;

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  close():void {
    this.dialogRef.close();
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
