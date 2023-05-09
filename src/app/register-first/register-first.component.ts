import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { debounceTime, map, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-first',
  templateUrl: './register-first.component.html',
  styleUrls: ['./register-first.component.scss']
})
export class RegisterFirstComponent implements OnInit{
  registerForm_1!: FormGroup;
  isLoading = false;


  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}
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

  checkEmail = (control: AbstractControl): Observable<ValidationErrors | null> => {
    const val = control.value;
    const url = "http://localhost:4231/auth/check-email";
    return this.http.post(url, {email: val}).pipe(
      // tap((_) =>{
        // console.log("from http!")
      //   }),
      debounceTime(500),
      map((data: any) => {
        console.log(data)
        if (data) {
          return {hasEmail: true};
        }
        return null;
      })
    )
  }
  
  matchPassword: ValidatorFn = (group: AbstractControl): ValidationErrors | null =>{
    const password = group.get("password")?.value;
    const confirm = group.get("confirm")?.value;
    if (password != confirm) { return { 'noMatch': true } }
    return null
  }

  onSubmit() {
    console.log(this.registerForm_1.value);
  }
}
