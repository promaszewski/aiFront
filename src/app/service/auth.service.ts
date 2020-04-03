import { Injectable } from '@angular/core';
import {User} from '../interface/user';
import {HttpClient, HttpHandler, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {pipe} from 'rxjs';
import {Router} from '@angular/router';
import {stringify} from 'querystring';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private test: JSON;
  private status: string;
  private roles: string;


  constructor(private http: HttpClient , private router: Router) { }
  public login(userInfo: User) {
    this.logout();
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ZnJvbnRlbmRQYXNzd29yZEZsb3c6c2VjcmV0'

      })
    };
   let body = new URLSearchParams();
    body.append('grant_type', 'password');
    body.append('username', userInfo.email);
    body.append('password', userInfo.password);
    console.log(body);
    return this.http.post('http://localhost:8080/oauth/token', body.toString(), httpOptions );
      //.pipe(map(user => {
        //localStorage.setItem('ACCESS_TOKEN', JSON.stringify(user));
        //this.getRole();
     // })).subscribe(res => {if (this.isLoggedIn()) {this.router.navigateByUrl('/desktop'); }  }
      //);
   // this.router.navigate('desktop');

  }


  public isLoggedIn() {

   // let test = JSON.parse(localStorage.getItem('ACCESS_TOKEN'))
   // let status;

    //console.log(test.access_token);
    //const httpOptions = {

    //  headers: new HttpHeaders({
      //  'Access-Control-Allow-Origin': '*',
      //  'Content-Type': 'application/x-www-form-urlencoded',
        //'Authorization': 'Bearer ' + test.access_token.toString()

     // })
    //};

    //this.http.get('http://localhost:8080/greet/hello', httpOptions)
      //.pipe(map(username => { this.status = JSON.stringify( username); } ))
      //.subscribe();
    //console.log(this.status);
    if (localStorage.getItem('ACCESS_TOKEN') != null)
    {
      return true;
    }
    {
      return false;
    }


   // return this.status;
  }
  public getroles()
  {
    if(this.roles==='admin')
    {
      return true;} else {return false;}
  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('ROLE');

  }
  public getName() {
    let test = JSON.parse(localStorage.getItem('ACCESS_TOKEN'))
    const httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + test.access_token.toString()

    })
  };
 if(this.isLoggedIn()) {
   return this.http.get('http://localhost:8080/greet/hello', httpOptions);
//.pipe(map(username => { this.status = JSON.stringify(username); } ))
//.subscribe(data =>{},error => {this.logout(); this.router.navigateByUrl('/login');});
   //  return this.status;}
 }}
  public getRole(){
    if(this.isLoggedIn()) {
    let test = JSON.parse(localStorage.getItem('ACCESS_TOKEN'))
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + test.access_token.toString()

      })
    };

    this.http.get('http://localhost:8080/greet/role', httpOptions)
      .pipe(map(username => {
        localStorage.setItem('ROLE', JSON.stringify(username));} ))
      .subscribe(data =>{},error => {this.logout(); this.router.navigateByUrl('/login');});
    return this.status;

  }}

}
