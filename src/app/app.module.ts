import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from './shared/shared.module';

export const MovieUrl = new InjectionToken<string>('');
export const ImgUrl = new InjectionToken<string>('');
export const TmdbBaseUrl = new InjectionToken<string>('');
export const MovieImgBaseUrl = new InjectionToken<string>('');
export const ApiKey = new InjectionToken<string>('');

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
    useValue:"https://image.tmdb.org/t/p/w440_and_h660_face"},
  {
    provide: TmdbBaseUrl,
    useValue: 'https://api.themoviedb.org/3',
  }, 
  {
    provide: MovieImgBaseUrl,
    useValue: 'https://image.tmdb.org/t/p',
  },
  {
    provide: ApiKey,
    useValue: '903ebd52027fe49503e599459ee42446',
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
