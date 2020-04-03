import { Component, OnInit } from '@angular/core';
import {VisitService} from '../../service/visit.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Data, Router} from '@angular/router';
import {PeriodicElement} from '../../interface/periodicelement';
import {visit} from '@angular/compiler-cli/src/ngtsc/util/src/visitor';
import {Visitid} from '../../interface/Visitid';
import {map} from 'rxjs/operators';
import {Visit} from '../../interface/visit';

@Component({
  selector: 'app-myvisit',
  templateUrl: './myvisit.component.html',
  styleUrls: ['./myvisit.component.css']
})
export class MyvisitComponent implements OnInit {
  private data;
  private visits;
  private visitid: Visitid;

  displayedColumns: string[] = ['nazwakontrahenta', 'misto', 'ulica', 'nrdomu', 'materialyrek', 'status', 'data', 'edit'];

  constructor(private visitservice: VisitService, private router: Router) {


  }

  ngOnInit() {
    this.data = new MatTableDataSource();

    this.visitservice.myvisit().subscribe((data) => {    this.data.data = data;});

    console.log(this.data);
  }

  public todate(numbe: number) {
    let date = new Date(numbe);
    return date.toLocaleDateString();

  }
public edit(vid: number){

      let o = JSON.stringify(vid);
    console.log(o.toString());
    localStorage.setItem('id', o.toString());
    this.router.navigateByUrl('/upvisit');



}


}
