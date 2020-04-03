import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Adduser } from '../interface/adduser';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  public adduser(userinfo: Adduser){
    let test = JSON.parse(localStorage.getItem('ACCESS_TOKEN'));
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + test.access_token.toString()

      })
    };

    let body= JSON.stringify(userinfo);
    return this.http.post('http://localhost:8080/greet/adduser', body.toString(), httpOptions).subscribe( data => {this.router.navigateByUrl('/desktop');},error =>{
    console.error(error); })
  }

  public userlist()
  {    let test = JSON.parse(localStorage.getItem('ACCESS_TOKEN'));
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + test.access_token.toString()

      })
    };
       return this.http.get('http://localhost:8080/greet/userlist', httpOptions);
  }
}
