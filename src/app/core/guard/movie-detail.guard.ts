import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthService } from '../services/authentication/auth.service';
import { UserRole } from 'src/app/interface/user.interface';


@Injectable({
  providedIn: 'root'
})
export class MovieItemGuard implements CanLoad, CanActivate{
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const { jwtToken, role } = this.authService.userValue;
      if (
        jwtToken && role &&
        (role === UserRole.ADMIN || role === UserRole.SUPERUSER)
      ) {
        return true;

      } else if (jwtToken){//wrong role
        alert("Please switch to Standard or Premium plan.");
        this.router.navigate(['/register/3']);
        return false;

      } else { 
        alert("Please sign in.");
        this.router.navigate(['sign-in'])
        return false;
      }

    }
  canLoad(route: Route, segments: UrlSegment[]): boolean {
    const { jwtToken, role } = this.authService.userValue;
    if (
      jwtToken && role &&
      (role === UserRole.ADMIN || role === UserRole.SUPERUSER)
    ) {
      return true;

    } else if (jwtToken){//wrong role
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