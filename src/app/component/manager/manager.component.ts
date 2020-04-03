import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {VisitService} from '../../service/visit.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
private users;
  private selectedOption: number;
  private data;
  displayedColumns: string[] = ['nazwakontrahenta', 'misto', 'ulica', 'nrdomu', 'materialyrek', 'status', 'data'];

  constructor(private userservice: UserService, private visitservice: VisitService) {
    this.userservice.userlist().subscribe(data=> {this.users=data; console.log(this.users)});

  }

  ngOnInit() {
  }

  public wczytaj(){
    this.data = new MatTableDataSource();
    this.visitservice.managevisit(this.selectedOption).subscribe(data=>{  this.data.data = data;})

  }
  public todate(numbe: number) {
    let date = new Date(numbe);
    return date.toLocaleDateString();

  }
}
