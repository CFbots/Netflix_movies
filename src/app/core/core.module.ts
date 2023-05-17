import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { JwtInterceptor } from '@auth0/angular-jwt';
import { ErrorInterceptor } from './interceptor/error.interceptor';


export const MovieUrl = new InjectionToken<string>('');
export const ImgUrl = new InjectionToken<string>('');
export const TmdbBaseUrl = new InjectionToken<string>('');
export const MovieImgBaseUrl = new InjectionToken<string>('');
export const ApiKey = new InjectionToken<string>('');
export const AuthApiPath = new InjectionToken<string>('');

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    CommonModule
  ], 
})
export class CoreModule { 
  public static forRoot(): ModuleWithProviders<CoreModule>{
    return {
      ngModule: CoreModule,
      providers:[
        {
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
        {
          provide: AuthApiPath,
          useValue: 'http://localhost:4231',
        },
        // {
        //   provide: HTTP_INTERCEPTORS,
        //   useClass: JwtInterceptor,
        //   multi: true,
        // },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorInterceptor,
          multi: true,
        },
      ]
    }
  }
}
