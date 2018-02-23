import { Component, OnInit } from '@angular/core';
import { SessionService } from "../session.service";
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {
  user: any;
  formInfo = {
   username: '',
   name: '',
   password: '',
   secret: ''
 };
 error: string;
 privateData: any = '';


 constructor(private session: SessionService, public routerPrivate:Router) { }

 ngOnInit() {
 }

 signup() {
   this.session.signup(this.formInfo)
     .subscribe(
       (user) => this.successCb(user),
       (err) => this.errorCb(err)
     );
 }

 errorCb(err) {
   this.error = err;
   this.user = null;
 }

 successCb(user) {
   this.user = user;
   this.error = null;
   this.routerPrivate.navigate(['/private'])
 }
}
