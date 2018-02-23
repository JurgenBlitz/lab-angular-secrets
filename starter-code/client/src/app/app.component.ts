import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formInfo = {
    username: '',
    password: ''
  };
  error: string;
  privateData: any = '';

  constructor(public router:Router/*, private signupComponent: AuthSignupComponent, private loginComponent: AuthLoginComponent*/) { }

  ngOnInit() {
  }
 
  login(){
    this.router.navigate(['/login']);
  }
  signup(){
    this.router.navigate(['/signup']);
    
  }
 }
