import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren:() => import('./homepage/homepage.module').then((m)=>(m.HomePageModule))},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'sign-in', loadChildren:()=>import('./sign-in/sign-in.module').then((m)=>m.SignInModule)}, 
  { path: 'register', loadChildren: () => import('./register/register.module').then((m) => m.RegisterModule) }, 
  { path: 'movie-list', loadChildren:() => import('./movie-list/movie-list.module').then((m)=>(m.MovieListModule))},
  { path: 'movie-list/:id', loadChildren: () => import('./movie-detail/movie-detaill.module').then((m) => m.MovieDetailModule)},
  { path: '**', loadChildren:()=>import('./error-page/error-page.module').then((m)=>m.ErrorPageModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
