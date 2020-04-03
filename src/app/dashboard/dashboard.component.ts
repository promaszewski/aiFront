import {Component, OnInit, ViewChild} from '@angular/core';
import { AuthService } from  '../service/auth.service';
import {Router} from '@angular/router';
import {error} from 'util';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  private Username: string;
  private Role: string;
  private Admin: string;
  private Login: string;
  private Wizyty: string;

  ngOnInit() {
    this.Username = null;
    this.Wizyty = 'Wizyty'
    this.Login = 'Login';


  }

  public islogin() {
    if (localStorage.getItem('ACCESS_TOKEN') != null) {
      return true;
    } else {
      return false;
    }
  }

  public isnotlogin() {
    if (localStorage.getItem('ACCESS_TOKEN') != null) {
      return false;
    } else {
      return true;
    }
  }

  public wyloguj() {
    this.Username = null;
    localStorage.removeItem('ACCESS_TOKEN');
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  public getusername() {
    if (this.Username == null) {
      if (this.authService.isLoggedIn()) {
        let a;
        this.authService.getName().subscribe(data => {
          a = data;
        }, err => {
          this.router.navigateByUrl('/login')
        });
        this.Username = a.username;
        this.Role = a.role;
      }
    }

  }

  public getrole() {
    if (localStorage.getItem("ROLE") != null) {
      let test = JSON.parse(localStorage.getItem('ROLE'));

      if (test.role.toString() === 'admin') {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  public getrole2() {
    if (localStorage.getItem("ROLE") != null) {

      let test = JSON.parse(localStorage.getItem('ROLE'));
      if (test.role.toString() === 'menager') {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }


  }

}
