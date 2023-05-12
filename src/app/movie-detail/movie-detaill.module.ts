import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { TrailerYoutubeComponent } from './trailer-youtube/trailer-youtube.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

const routes: Routes = [
    {path: '', component: MovieDetailComponent}
]
@NgModule({
  declarations: [
    MovieDetailComponent,
    TrailerYoutubeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    RouterModule.forChild(routes),
    YouTubePlayerModule 
  ],
  exports: [
    MovieDetailComponent,
    TrailerYoutubeComponent
  ]
})
export class MovieDetailModule { }