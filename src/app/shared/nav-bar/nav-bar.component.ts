import { Component, OnInit } from '@angular/core';
import { AppUserAuth } from 'src/app/interface/user.interface';
import { AuthService } from 'src/app/core/services/authentication/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{
  isSignedIn!: Boolean;
  username:string = "";
  user!: AppUserAuth;

  constructor(private authService: AuthService){}
  ngOnInit(): void {
    this.checkSignInStatus();
  }

  checkSignInStatus(){
    this.authService.user$.subscribe(
      (user) => {
        if (user.jwtToken && user.username){
          this.username = user.username;
          this.isSignedIn = true;
        } else {
          this.isSignedIn = false;
        }
      }
    );
  }

  signOut(){
    this.authService.signOut();
  }

}
