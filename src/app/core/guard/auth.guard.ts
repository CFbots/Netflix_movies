import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/authentication/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      const { jwtToken, role } = this.authService.userValue;
      const claimType: string = route.data['claimType'];
  
    if (jwtToken) {
        return true;
    } else {
        alert("Please sign in.");
        this.router.navigate(['sign-in']);
        return false;
    }
  }
  
}