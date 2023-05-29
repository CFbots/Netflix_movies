import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { AuthService } from '../services/authentication/auth.service';
import { AppUserAuth } from 'src/app/interface/user.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
    currentToken!: string | null;

    constructor(
        private readonly authService: AuthService,
        private readonly router: Router
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        this.currentToken = localStorage.getItem('access_token');
        if (this.currentToken) {
            return true;
        } else {
            alert("Please sign in.");
            this.router.navigate(['sign-in']);
            return false;
        }
    }
    
    canLoad(route: Route, segments: UrlSegment[]): boolean {
        this.currentToken = localStorage.getItem('access_token');
        if (this.currentToken) {
            return true;
        } else {
            alert("Please sign in.");
            this.router.navigate(['sign-in']);
            return false;
        }
    }
}