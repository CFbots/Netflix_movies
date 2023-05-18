import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, of, tap, throwError} from 'rxjs';
import { AppUserAuth, AuthResponse, UserInfo, UserRegister, UserRole, UserSignIn } from 'src/app/interface/user.interface';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthApiPath } from 'src/app/core/core.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  userRegister = new UserRegister();
  private jwtHelper = new JwtHelperService()
  private userSubject$: BehaviorSubject<AppUserAuth> = new BehaviorSubject({});
  user$: Observable<AppUserAuth> = this.userSubject$.asObservable();
  private refreshTokenTimeout!: ReturnType<typeof setTimeout>;

  get userValue(): AppUserAuth {
    return this.userSubject$.value;
  }

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
    @Inject(AuthApiPath) private authApiPath: string) { }

  signIn(userSignIn: UserSignIn): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.authApiPath}/auth/signin`, userSignIn).pipe(
      tap(({ accessToken, role }: AuthResponse) => {
        console.log("accessToken, role", accessToken, role);
        this.setUserValuebyToken({accessToken, role});
        this.router.navigate(['/movie-list']);
      }),
    );
  }

  signOut(){
    localStorage.removeItem('access_token');
    this.stopRefreshTokenTimer();
    this.userSubject$.next({});
    this.router.navigate(['home'])
  }

  addUserInfo(userInfo: UserInfo) {
    this.userRegister = {
      ...this.userRegister,
      ...userInfo,
    };
    console.log("userRegister:", this.userRegister)
  }

  signUp(): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.authApiPath}/auth/signup`, this.userRegister).pipe(
        tap(({ accessToken, role }: AuthResponse) => {
          console.log("SignUp accessToken, role", accessToken, role);
          this.setUserValuebyToken({ accessToken, role });
          this.router.navigate(['movie-list']);
        }),
      );
  }

  refreshToken():Observable<AuthResponse | string>{
    const currentToken = localStorage.getItem('access_token');
    if (!currentToken) {
      this.router.navigate(['/']);
      return of("error with jwt token");
    }

    const { id, username, email, tmdb_key, jwtToken, role } = this.jwtHelper.decodeToken(currentToken);
    const user = { id, username, email, tmdb_key, role};
    return this.http.post<AuthResponse>(`${this.authApiPath}/auth/refresh-token`, user)
    .pipe(
      tap(({accessToken, role}: AuthResponse) => {
        console.log("refresh the toekn!");
        this.setUserValuebyToken({ accessToken, role });
      }))
  }

  upgradePermission(userRole: { role: UserRole }): Observable<AuthResponse> {
    this.stopRefreshTokenTimer();
    return this.http.patch<AuthResponse>(`${this.authApiPath}/auth/userupdate`, userRole)
    .pipe(
      tap(({accessToken, role}: AuthResponse) => {
        this.setUserValuebyToken({ accessToken, role });
        this.router.navigate(['movie-list']);
    }),
    catchError((error) => {
      return throwError(()=>{console.log("Something went wrong!", error)});
    }))
  }

  private setUserValuebyToken = ({accessToken, role}: AuthResponse) => {
    localStorage.setItem('access_token', accessToken);
    const { id, username, email, tmdb_key, exp } = this.jwtHelper.decodeToken(accessToken);
    const user = { id, username, email, tmdb_key, role, jwtToken: accessToken };
    console.log("user", user);
    this.userSubject$.next(user);
    console.log("refresh the token at:", exp);
    this.startRefreshTokenTimer(exp);
  }

  private startRefreshTokenTimer(exp: string){
    const expires = new Date(+exp * 1000);
    const timeout = expires.getTime() - Date.now();
    this.refreshTokenTimeout = setTimeout(()=>{
      if(this.userValue.jwtToken) {
      this.refreshToken().subscribe();
    }
  }, timeout);
  }

  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }
}
