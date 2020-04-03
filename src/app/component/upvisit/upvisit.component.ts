import { Component, OnInit } from '@angular/core';
import {Visit} from '../../interface/visit';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {VisitService} from '../../service/visit.service';

@Component({
  selector: 'app-upvisit',
  templateUrl: './upvisit.component.html',
  styleUrls: ['./upvisit.component.css']
})


export class UpvisitComponent implements OnInit {
  private visitInfo: Visit;
  private visit;
  constructor(private router: Router, private formBuilder: FormBuilder, private visitservice: VisitService) {

  }
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
    this.visitservice.onevisit().subscribe((data) => {console.log(data); this.visit = data;
    this.visitForm.patchValue({nazwakontrahenta: this.visit.nazwakontrahenta, misto: this.visit.misto, ulica: this.visit.ulica, nrdomu: this.visit.nrdomu, komentarz: this.visit.komentarz, materialyrek: this.visit.materialyrek, status: this.visit.status, data: this.todate(this.visit.data)});
    })



  }

  public todate(numbe: number) {
    let date = new Date(numbe);

    return date.toLocaleDateString();

  }
  get formControls() {return this.visitForm.controls}
  public sent()
  {
    this.isSubmitted = true;
    if (this.visitForm.invalid) { return; }
    this.visitInfo = this.visit;
    this.visitInfo.nazwakontrahenta = this.visitForm.value.nazwakontrahenta;
    let date = new Date(this.visitForm.value.data);
    this.visitInfo.data = date;
    this.visitInfo.komentarz = this.visitForm.value.komentarz;
    this.visitInfo.materialyrek = this.visitForm.value.materialyrek;
    this.visitInfo.misto= this.visitForm.value.misto;
    this.visitInfo.nrdomu= this.visitForm.value.nrdomu;
    this.visitInfo.status = this.visitForm.value.status;
    this.visitservice.update(JSON.stringify(this.visitInfo));


  }


}
