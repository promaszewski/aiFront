import { Component, OnInit } from '@angular/core';
import {Visit} from '../../interface/visit';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {VisitService} from '../../service/visit.service';
@Component({
  selector: 'app-addvisit',
  templateUrl: './addvisit.component.html',
  styleUrls: ['./addvisit.component.css']
})
export class AddvisitComponent implements OnInit {
 private visitInfo: Visit;
  constructor(private router: Router, private formBuilder: FormBuilder, private visitservice: VisitService) { }
  visitForm: FormGroup;
  isSubmitted = false;

  ngOnInit() {
    this.visitForm = this.formBuilder.group({
      nazwakontrahenta: ['', Validators.required],
      misto: ['', Validators.required],
      ulica: ['', Validators.required],
      nrdomu:['', Validators.required],
      komentarz:['', Validators.required],
      materialyrek:['', Validators.required],
      status:['', Validators.required],
      data:['', Validators.required],
    });
  }
  get formControls() {return this.visitForm.controls}
  public sent()
  {
    this.isSubmitted = true;
    if (this.visitForm.invalid) { return; }
    this.visitservice.adduser(this.visitForm.value);

  }

}
