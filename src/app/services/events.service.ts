import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {APIURL }  from '../../environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  })
}

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  

  constructor(private http: HttpClient) { }


  

  deleteEvent(id: number) {
    return this.http.delete(`${APIURL}/event/delete/${id}`, httpOptions);
  }

  editEvent(id: number, body) {
    return this.http.put(`${APIURL}/event/update/${id}`, body, httpOptions);
  }

  myEvents() {
    return this.http.get(`${APIURL}/event/getmine`, httpOptions);
  }
  eventById(id) {
    return this.http.get(`${APIURL}/event/get/${id}`, httpOptions);
  }

  createEvent(body) : any {
    return this.http.post(`${APIURL}/event/create`, body, httpOptions);
  }

  allEvents() {
    return this.http.get(`${APIURL}/event/`, httpOptions);
  }
  
}
