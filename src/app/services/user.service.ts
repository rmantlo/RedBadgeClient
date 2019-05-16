import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from '../../environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    //'Authorization': localStorage.getItem('token')
  })
}

@Injectable({
  providedIn: 'root'

})
export class UserService {


  constructor(private http: HttpClient) { }

  login(loginInfo) {
    console.log(loginInfo);
    return this.http.post(`${APIURL}/user/login`, loginInfo, httpOptions)
  }
  signup(userInfo) {
    console.log(userInfo)
    return this.http.post(`${APIURL}/user/signup`, userInfo, httpOptions)
  }
  getUser() {
    const httpOptionA = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.get(`${APIURL}/userinfo/get`, httpOptionA)
  }

  updateUser(updates) {
    const httpOptionA = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.put(`${APIURL}/userinfo/update`, updates, httpOptionA)
  }

  deleteUser() {
    const httpOptionA = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.delete(`${APIURL}/userinfo/delete`, httpOptionA)
  }
}
