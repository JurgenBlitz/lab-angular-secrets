import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

interface User {
  username:String,
  password:String
}

@Injectable()
export class SessionService {
  BASEURL:String= "http://localhost:3000"
  private user: User;

  constructor(private http: Http) { }

  signup(user) {
    console.log(user);
    return this.http.post(`${this.BASEURL}/api/signup`, user)
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`/api/login`, user)
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`/api/logout`, {})
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`/api/loggedin`)
      .map(res => res.json())
      .catch(this.handleError);
  }
  
  handleError(e) {
    return Observable.throw(e.json().message);
  }

}

