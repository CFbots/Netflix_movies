import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/authentication/auth.service';
import { Router } from '@angular/router';
import { UserRole } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-register-choose-plan',
  templateUrl: './register-choose-plan.component.html',
  styleUrls: ['./register-choose-plan.component.scss']
})
export class RegisterChoosePlanComponent implements OnInit{
  plans:string[] = ["Standard with ads", "Standard", "Premium"];
  plans_quality:string[] = ["Great", "Great", "Better"];
  plans_prices:string[] = ["$6.99", "$15.49", "$19.99"];
  plans_resolut:string[] = ["1080p", "1080p", "4K+HDR"];
  selectedIndex = 0;
  selectedRole: UserRole = UserRole.USER;
  slectedTextColor = "rgb(94, 89, 89)"; 
  unslectedTextColor = "rgb(152, 143, 143)";

  constructor(
    private readonly authService: AuthService,
    private router: Router){}

  ngOnInit(): void {
  }

  selectedPlan(index: number){
    switch (index) {
      case 0:
        this.selectedRole = UserRole.USER; 
        break; 
      case 1:
        this.selectedRole = UserRole.SUPERUSER;
        break;
      case 2:
        this.selectedRole = UserRole.ADMIN; 
        break;
    }
  }

  sendSignUp(){
    this.selectedPlan(this.selectedIndex);

    const user = this.authService.userValue;
    if (!user.jwtToken) {
      console.log("sigining up!");
      this.authService.addUserInfo({ "role": this.selectedRole});
      this.authService.signUp().subscribe();
    } else {
      console.log("updating role!", this.selectedRole);
      this.authService.upgradePermission({role: this.selectedRole}).subscribe();
    }
}
}
