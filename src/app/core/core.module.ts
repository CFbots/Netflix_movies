import { APP_INITIALIZER, InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthWithLocalInterceptor } from "./interceptor/auth-with-local.interceptor";
import { ErrorInterceptor } from './interceptor/error.interceptor';
import { appInitializer } from './app.initializer';
import { AuthService } from './services/authentication/auth.service';
import { InfiniteScrollModule } from "ngx-infinite-scroll";

export const ImgUrl = new InjectionToken<string>('');
export const TmdbBaseUrl = new InjectionToken<string>('');
export const MovieImgBaseUrl = new InjectionToken<string>('');
export const ApiKey = new InjectionToken<string>('');
export const AuthApiPath = new InjectionToken<string>('');

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    CommonModule,
    InfiniteScrollModule
  ], 
})
export class CoreModule { 
  public static forRoot(): ModuleWithProviders<CoreModule>{
    return {
      ngModule: CoreModule,
      providers:[
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
        { provide: APP_INITIALIZER, 
          useFactory: appInitializer, 
          multi: true, 
          deps: [AuthService] 
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthWithLocalInterceptor,
          multi: true,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorInterceptor,
          multi: true,
        },
      ]
    }
  }
}
