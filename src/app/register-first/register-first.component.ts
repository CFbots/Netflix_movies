import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-first',
  templateUrl: './register-first.component.html',
  styleUrls: ['./register-first.component.scss']
})
export class RegisterFirstComponent implements OnInit{
  registerForm_1!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.registerForm_1 = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
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
    console.log("hhihi")
    const password = group.get("password")?.value;
    const confirm = group.get("confirm")?.value;
    if (password != confirm) { console.log("not match!"); return { 'noMatch': true } }
    return null
  }

  onSubmit() {
    console.log(this.registerForm_1.value);
  }
}
