import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/core/services/authentication/auth.service';

@Injectable({
    providedIn: 'root'
  })

export class AuthGuard implements CanActivate {

constructor(
    private readonly authService: AuthService,
    private readonly router: Router) {}

canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const user = this.authService.userValue;

    if (user.jwtToken) {
        return true;
    } else {
        console.log("please login!");
        this.router.navigate(['sign-in']);
        return false;
    }
}

}