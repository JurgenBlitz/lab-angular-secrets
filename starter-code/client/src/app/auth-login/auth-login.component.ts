import { Component, OnInit } from '@angular/core';
import { SessionService } from "../session.service";
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {
  user: any;
  formInfo = {
   username: '',
   password: '',
 };
 error: string;

 constructor(private session: SessionService, public routerPrivate:Router) { }

  ngOnInit() {
  
}

 login() {
  this.session.login(this.formInfo)
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
