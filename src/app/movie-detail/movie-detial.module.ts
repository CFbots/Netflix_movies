import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail.component';

const routes: Routes = [
    {path: '', component: MovieDetailComponent}
]
@NgModule({
  declarations: [
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    MovieDetailComponent
  ]
})
export class MovieDetailModule { }