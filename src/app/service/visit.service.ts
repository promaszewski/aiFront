import { Injectable } from '@angular/core';
import {Adduser} from '../interface/adduser';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Visit} from '../interface/visit';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class VisitService {

  constructor(private http: HttpClient, private router: Router) { }
  private datas;
  private data;
  public adduser(visitinfo: Visit){
    let test = JSON.parse(localStorage.getItem('ACCESS_TOKEN'));

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + test.access_token.toString()

      })
    };

    let body= JSON.stringify(visitinfo);
    return this.http.post('http://localhost:8080/greet/addvisit', body.toString(), httpOptions).subscribe( data => {this.router.navigateByUrl('/desktop');},error =>{
      console.error(error); });
  }
  public myvisit(){
    let test = JSON.parse(localStorage.getItem('ACCESS_TOKEN'));

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + test.access_token.toString()

      })
    };
    return this.http.get('http://localhost:8080/greet/myvisit', httpOptions);
     // .pipe(map(data => { this.datas = JSON.stringify(data); } ))
     // .subscribe();
   // return this.datas;

  }
  public onevisit(){
    let test = JSON.parse(localStorage.getItem('ACCESS_TOKEN'));
    let id = JSON.parse(localStorage.getItem('id'));

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + test.access_token.toString()

      })
    };
    let path = 'http://localhost:8080/greet/onevisit/' + id;
    return this.http.get(path, httpOptions);


  }
  public update(datas: string){
    let test = JSON.parse(localStorage.getItem('ACCESS_TOKEN'));

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + test.access_token.toString()

      })
    };

    let body = datas;
    return this.http.post('http://localhost:8080/greet/upvisit', body.toString(), httpOptions).subscribe( data => {this.router.navigateByUrl('/myvisit');},error =>{
      console.error(error); });
  }
  public managevisit(id: number){
    let test = JSON.parse(localStorage.getItem('ACCESS_TOKEN'));

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + test.access_token.toString()

      })
    };
    return this.http.get('http://localhost:8080/greet/managevisit/' + id, httpOptions);
    // .pipe(map(data => { this.datas = JSON.stringify(data); } ))
    // .subscribe();
    // return this.datas;

  }

}
