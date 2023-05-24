import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/authentication/auth.service';
import { AuthApiPath } from '../core.module';



@Injectable()
export class TokenHeaderInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService,
    @Inject(AuthApiPath) private AuthApiPath: string) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const user = this.authService.userValue;

    const isLoggedIn = user && user.jwtToken;
    const isApiUrl = request.url.startsWith(
      `${this.AuthApiPath}/auth/userupdate`
    );
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${user.jwtToken}` },
      });
    }
    return next.handle(request);
  }
}