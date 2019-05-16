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
  url: any = {}

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post(this.url, { username, password }, httpOptions)
  }
}