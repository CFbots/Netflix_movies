import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-second',
  templateUrl: './register-second.component.html',
  styleUrls: ['./register-second.component.scss']
})
export class RegisterSecondComponent implements OnInit{
  registerForm_2!: FormGroup;
  constructor(private formBuilder: FormBuilder){}
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
    console.log(this.registerForm_2.value);
  }
}
