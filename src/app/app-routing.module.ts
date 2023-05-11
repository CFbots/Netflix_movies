import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterFirstComponent } from './register-first/register-first.component';
import { RegisterSecondComponent } from './register-second/register-second.component';
import { RegisterChoosePlanComponent } from './register-choose-plan/register-choose-plan.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'sign-in', component: SignInComponent }, 
  { path: 'register-first', component: RegisterFirstComponent }, 
  { path: 'register-second', component: RegisterSecondComponent }, 
  { path: 'register-choose-plan', component: RegisterChoosePlanComponent }, 
  { path: 'movie-list', component: MovieListComponent},
  { path: '**', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SignInComponent]
