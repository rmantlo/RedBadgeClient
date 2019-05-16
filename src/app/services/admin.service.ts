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
export class AdminService {
  url: any = {};
  data: Object = {};

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    console.log(this.data)
    return this.http.post(this.url, { username, password }, httpOptions)
  }


}