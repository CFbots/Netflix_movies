import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieCreditResolveService } from './core/services/resolvers/movie-credit-resolve.service';
import { MovieVideoResolveService } from './core/services/resolvers/movie-video-resolve.service';
import { MoviePosterResolveService } from './core/services/resolvers/movie-poster-resolve.service';
import { MovieResolveService } from './core/services/resolvers/movie-resolve.service';
import { AuthGuard } from './core/guard/auth.guard';
import { MovieItemGuard } from './core/guard/movie-detail.guard';
// import { MovieListResolveService } from './core/services/resolvers/movie-list-resolve.service';

const routes: Routes = [
  { path: 'home', loadChildren:() => import('./pages/homepage/homepage.module').then((m)=>(m.HomePageModule))},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'sign-in', loadChildren:()=>import('./pages/sign-in/sign-in.module').then((m)=>m.SignInModule)}, 
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then((m) => m.RegisterModule) },
  { path: 'movie-list', loadChildren:() => import('./pages/movie-list/movie-list.module').then((m)=>(m.MovieListModule)), canLoad:[AuthGuard], canActivate:[AuthGuard]}, 
  // { path: 'movie-list', loadChildren:() => import('./pages/movie-list/movie-list.module').then((m)=>(m.MovieListModule)), resolve:{
  //   movielists: MovieListResolveService,
  // },
  // canLoad:[AuthGuard], canActivate:[AuthGuard]},
  { path: 'movie-list/:id', loadChildren: () => import('./pages/movie-detail/movie-detaill.module').then((m) => m.MovieDetailModule), resolve:{
    cast: MovieCreditResolveService,
    videos: MovieVideoResolveService,
    movie: MovieResolveService,
    posters: MoviePosterResolveService
  }},
  { path: '**', loadChildren:()=>import('./pages/error-page/error-page.module').then((m)=>m.ErrorPageModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
