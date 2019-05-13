import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  allEvents(){
    return this.http.get('http://localhost:3000/event/', httpOptions)
  }

  myEvents(){
    return this.http.get('http://localhost:3000/event/getmine', httpOptions)
  }
  eventById(id){
    return this.http.get(`http://localhost:3000/event/get/${id}`, httpOptions)
  }

  // createEvent(body){
  //   return this.http.post('http://localhost:3000/event/create', body, httpOptions)
  // }
  
}
