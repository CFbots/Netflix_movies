import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { AuthService } from '../services/authentication/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
    constructor(
        private readonly authService: AuthService,
        private readonly router: Router
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        const user = this.authService.userValue;
        if (user.jwtToken) {
            return true;
        } else {
            alert("Please sign in.");
            this.router.navigate(['sign-in']);
            return false;
        }
    }
    
    canLoad(route: Route, segments: UrlSegment[]): boolean {
        const user = this.authService.userValue;
        if (user.jwtToken) {
            return true;
        } else {
            alert("Please sign in.");
            this.router.navigate(['sign-in']);
            return false;
        }
    }
}