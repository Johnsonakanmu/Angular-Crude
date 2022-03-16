import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
signupForm: FormGroup= new FormGroup({});
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl ('', [Validators.required]),
      userName: new FormControl ('', [Validators.required]),
      password: new FormControl ('', [Validators.required]),
      comfirmPassword: new FormControl ('', [Validators.required]),
    })
  }

  
   get name() {
    return this.signupForm.get('name');
  }

   get userName() {
    return this.signupForm.get('userName');
  }

   get password() {
    return this.signupForm.get('password');
  }

  get comfirmPassword() {
    return this.signupForm.get('comfirmPassword');
  }



}
