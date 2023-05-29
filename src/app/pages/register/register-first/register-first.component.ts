import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { debounceTime, map, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/authentication/auth.service';
import { AuthApiPath } from 'src/app/core/core.module';

@Component({
  selector: 'app-register-first',
  templateUrl: './register-first.component.html',
  styleUrls: ['./register-first.component.scss']
})
export class RegisterFirstComponent implements OnInit{
  registerForm_1!: FormGroup;
  isLoading = false;


  constructor(private formBuilder: FormBuilder, 
    private router: Router,
    private http: HttpClient, 
    private authService:AuthService,
    @Inject(AuthApiPath) private authApiPath: string
    ) {}
  ngOnInit(): void {
    this.registerForm_1 = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email], [this.checkEmail]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]], 
      confirm:['']
    }, { validators: this.matchPassword })
  }

  get email() {
    return this.registerForm_1.get('email');
  }

  get password() {
    return this.registerForm_1.get('password');
  }

  get comfirm(){
    return this.registerForm_1.get('confirm');
  }

  matchPassword: ValidatorFn = (group: AbstractControl): ValidationErrors | null =>{
    const password = group.get("password")?.value;
    const confirm = group.get("confirm")?.value;
    if (password != confirm) { return { 'noMatch': true } }
    return null
  }
  
  // AsyncValidator:
  checkEmail = (control: AbstractControl): Observable<ValidationErrors | null> => {
    const val = control.value;
    const url = `${this.authApiPath}/auth/check-email`;
    return this.http.post(url, {email: val}).pipe(
      debounceTime(500),
      map((data: any) => {
        if (data) {
          return {hasEmail: true};
        }
        return null;
      })
    )
  }

  onSubmit() {
    this.authService.addUserInfo({ "email": this.email?.value, "password": this.password?.value })
    this.router.navigate(['/register/2'])
    // console.log(this.registerForm_1.value);
  }
}
