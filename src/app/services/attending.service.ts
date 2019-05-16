import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from '../../environments/environment.prod';

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
    return this.http.get(`${APIURL}/attending/myattending`, httpOptions)
  }
  createAttendEvent(body){
    return this.http.post(`${APIURL}/attending/create`, body, httpOptions)
  }
  deleteAttend(eventId){
    return this.http.delete(`${APIURL}/attending/delete/${eventId}`, httpOptions)
  }

}
 