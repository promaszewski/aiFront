import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Adduser } from '../../interface/adduser';
import {UserService} from '../../service/user.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  private userifo: Adduser;
  constructor(private router: Router, private formBuilder: FormBuilder, private userservice: UserService) { }
  loginForm: FormGroup;
  isSubmitted = false;
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
      active:['', Validators.required]
    });
  }
  get formControls() {return this.loginForm.controls}
  public sent()
  {
    this.isSubmitted = true;
    if (this.loginForm.invalid) { return; }
    this.userservice.adduser(this.loginForm.value);

  }
}
