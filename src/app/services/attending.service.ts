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
export class AttendingService {

  constructor(private http: HttpClient) { }

  getMyAttending() {
    return this.http.get('http://localhost:3000/attending/myattending', httpOptions)
  }
  createAttendEvent(body){
    return this.http.post('http://localhost:3000/attending/create', body, httpOptions)
  }
  deleteAttend(eventId){
    return this.http.delete(`http://localhost:3000/attending/delete/${eventId}`)
  }

}
 