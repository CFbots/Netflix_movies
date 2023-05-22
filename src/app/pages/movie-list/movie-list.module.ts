import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list.component';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

const routes: Routes = [
    {path: '', component: MovieListComponent}
]
@NgModule({
  declarations: [
    MovieItemComponent,
    MovieListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    InfiniteScrollModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    MovieListComponent
  ]
})
export class MovieListModule { }