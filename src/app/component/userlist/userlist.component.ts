import { Component, OnInit } from '@angular/core';
import {VisitService} from '../../service/visit.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  private data;
  displayedColumns: string[] = ['email', 'active', 'deleted', 'id', 'role'];
  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit() {
    this.data = new MatTableDataSource();

    this.userservice.userlist().subscribe((data) => {    this.data.data = data;});
  }

}
