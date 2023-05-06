import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageBackgroundComponent } from './homepage-background/homepage-background.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterFirstComponent } from './register-first/register-first.component';
import { RegisterChoosePlanComponent } from './register-choose-plan/register-choose-plan.component';
import { RegisterSecondComponent } from './register-second/register-second.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieItemComponent } from './movie-item/movie-item.component';

export const MovieUrl = new InjectionToken<string>('');
export const ImgUrl = new InjectionToken<string>('');

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HomepageBackgroundComponent,
    NavBarComponent,
    SignInComponent,
    RegisterFirstComponent,
    RegisterChoosePlanComponent,
    RegisterSecondComponent,
    MovieListComponent,
    MovieItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [{
    provide: MovieUrl,
    useValue: 'https://api.themoviedb.org/3/trending/all/week?api_key=903ebd52027fe49503e599459ee42446',
  }, 
  { 
    provide: ImgUrl, 
    useValue:"https://image.tmdb.org/t/p/w440_and_h660_face"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
