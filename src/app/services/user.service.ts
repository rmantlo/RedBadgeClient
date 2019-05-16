import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    return this.http.post('http://localhost:3000/user/login', loginInfo, httpOptions)
  }
  signup(userInfo) {
    console.log(userInfo)
    return this.http.post('http://localhost:3000/user/signup', userInfo, httpOptions)
  }
  getUser() {
    const httpOptionA = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.get('http://localhost:3000/userinfo/get', httpOptionA)
  }

  updateUser(updates) {
    const httpOptionA = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.put('http://localhost:3000/userinfo/update', updates, httpOptionA)
  }

  deleteUser() {
    const httpOptionA = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.delete('http://localhost:3000/userinfo/delete', httpOptionA)
  }
}
