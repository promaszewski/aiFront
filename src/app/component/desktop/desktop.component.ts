import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';


@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

}
