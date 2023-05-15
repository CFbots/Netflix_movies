import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieCreditResolveService } from './services/resolvers/movie-credit-resolve.service';
import { MovieVideoResolveService } from './services/resolvers/movie-video-resolve.service';
import { MoviePosterResolveService } from './services/resolvers/movie-poster-resolve.service';
import { MovieResolveService } from './services/resolvers/movie-resolve.service';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  { path: 'home', loadChildren:() => import('./homepage/homepage.module').then((m)=>(m.HomePageModule))},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'sign-in', loadChildren:()=>import('./sign-in/sign-in.module').then((m)=>m.SignInModule)}, 
  { path: 'register', loadChildren: () => import('./register/register.module').then((m) => m.RegisterModule) }, 
  { path: 'movie-list', loadChildren:() => import('./movie-list/movie-list.module').then((m)=>(m.MovieListModule)), canActivate: [AuthGuard]},
  { path: 'movie-list/:id', loadChildren: () => import('./movie-detail/movie-detaill.module').then((m) => m.MovieDetailModule), resolve:{
    cast: MovieCreditResolveService,
    videos: MovieVideoResolveService,
    movie: MovieResolveService,
    posters: MoviePosterResolveService
  }},
  { path: '**', loadChildren:()=>import('./error-page/error-page.module').then((m)=>m.ErrorPageModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
