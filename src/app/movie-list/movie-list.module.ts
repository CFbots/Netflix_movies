import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list.component';
import { MovieItemComponent } from '../movie-item/movie-item.component';

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
    RouterModule.forChild(routes),
  ],
  exports: [
    MovieListComponent
  ]
})
export class MovieListModule { }