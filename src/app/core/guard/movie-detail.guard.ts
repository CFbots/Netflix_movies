import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthService } from '../services/authentication/auth.service';
import { UserRole } from 'src/app/interface/user.interface';


@Injectable({
  providedIn: 'root'
})
export class MovieItemGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
    const { jwtToken, role } = this.authService.userValue;
    if (
      jwtToken &&
      role &&
      (role === UserRole.ADMIN || role === UserRole.SUPERUSER)
    ) {

      return true;

    } else if (jwtToken){
      this.router.navigate(['/register/3'], {
        queryParams: { returnUrl: state.url },
      });

    } else {
      this.router.navigate(['sign-in'], {
        queryParams: { returnUrl: state.url },
      });
    }
    return false;
  }
}