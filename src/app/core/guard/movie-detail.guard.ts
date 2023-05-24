import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { AuthService } from '../services/authentication/auth.service';
import { AppUserAuth, UserRole } from 'src/app/interface/user.interface';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class MovieItemGuard implements CanActivate{
  private jwtHelper = new JwtHelperService();
  user!:AppUserAuth;
 
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      this.user = this.authService.userValue;

      if (
        this.user.jwtToken && this.user.role &&
        (this.user.role === UserRole.ADMIN || this.user.role === UserRole.SUPERUSER)
      ) {
        return true;

      } else if (this.user.jwtToken && this.user.role === UserRole.USER){ 
        alert("Please switch to Standard or Premium plan.");
        this.router.navigate(['/register/3']);
        return false;

      } else { 
        alert("Please sign in.");
        this.router.navigate(['sign-in'])
        return false;
      }
    }
} 