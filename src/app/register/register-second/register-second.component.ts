import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-register-second',
  templateUrl: './register-second.component.html',
  styleUrls: ['./register-second.component.scss']
})
export class RegisterSecondComponent implements OnInit{
  registerForm_2!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService){}
  ngOnInit(): void {
    this.registerForm_2 = this.formBuilder.group({
      username:["", Validators.required],
      api_key:["", Validators.required]
    });
  }
  get username(){
    return this.registerForm_2.get("username");
  }

  get api_key(){
    return this.registerForm_2.get("api_key");
  }
  onSubmit() {
    this.authService.addUserInfo({ "username": this.username?.value, "tmdb_key": this.api_key?.value })
    this.router.navigate(['/register/3'])
  }
}
