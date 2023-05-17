import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { TrailerYoutubeComponent } from './trailer-youtube/trailer-youtube.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MovieCreditResolveService } from '../../core/services/resolvers/movie-credit-resolve.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
    MatProgressSpinnerModule,
    MatIconModule,
    MatDialogModule,
    RouterModule.forChild(routes),
    YouTubePlayerModule 
  ],
  providers:[MovieCreditResolveService], 
  exports: [
    MovieDetailComponent,
    TrailerYoutubeComponent, 
    MatProgressSpinnerModule
  ]
})
export class MovieDetailModule { }