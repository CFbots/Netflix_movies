import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { RegisterFirstComponent } from './register/register-first/register-first.component';
import { RegisterChoosePlanComponent } from './register/register-choose-plan/register-choose-plan.component';
import { RegisterSecondComponent } from './register/register-second/register-second.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from './shared/shared.module';

export const MovieUrl = new InjectionToken<string>('');
export const ImgUrl = new InjectionToken<string>('');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    MatFormFieldModule,
    SharedModule
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
