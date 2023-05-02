import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterFirstComponent } from './register-first/register-first.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'sign-in', component: SignInComponent }, 
  { path: 'register-first', component: RegisterFirstComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SignInComponent]
