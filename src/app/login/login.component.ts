import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  '../interface/user';
import { AuthService } from  '../service/auth.service';
import {error} from 'util';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }
  error: String;
  loginForm: FormGroup;
  isSubmitted = false;
  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

get formControls() {return this.loginForm.controls}

login(){

    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if (this.loginForm.invalid) { return; }
  this.authService.login(this.loginForm.value).pipe().subscribe((token)=>{localStorage.setItem('ACCESS_TOKEN', JSON.stringify(token)); this.authService.getRole(); this.router.navigateByUrl('/desktop'); });

  }
}
