import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(loginInfo) {
    console.log(loginInfo);
    return this.http.post('http://localhost:3000/user/login', loginInfo, httpOptions)
  }
  signup(userInfo) {
    console.log(userInfo)
    return this.http.post('http://localhost:3000/user/signup', userInfo, httpOptions)
  }
}
