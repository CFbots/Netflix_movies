import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]]
    })
  }
  get email() {
    return this.registerForm_1.get('email');
  }

  get password() {
    return this.registerForm_1.get('password');
  }
  onSubmit() {
    console.log(this.registerForm_1.value);
  }
}
