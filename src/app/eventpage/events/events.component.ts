import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { AttendingService } from 'src/app/services/attending.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  event: any;
  // certainEvent: any;
  token: any;
  role: any;
  trueValue: boolean = true;
  cardImage: any;

  constructor(private eventService: EventsService, private attendService: AttendingService) { }

  addMap: any = {
    lat: "30.45555",
    lng: "42.35999"
  }

  latitude: number = 39.96514511660002;
  longitude: number = -86.00871011355463;
  locationChosen: boolean = false;
  streetViewControl: boolean = false;

  onChoseLocation(event) {
    console.log(event);
    this.addMap = event.coords;
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }


  getEvent(): any {
    this.eventService.allEvents().subscribe(
      data => {
        //console.log(data);
        this.event = data;
        // this.event.reverse();
        // this.certainEvent = this.event.slice(0,20);
      }
    )
  }

  setCardImage(keyword) {
    if (keyword === 'running') {
      this.cardImage = '../../../assets/runners.jpeg'
    }
  }

  ngOnInit() {
    this.getEvent();
    this.role = localStorage.getItem("role");
  }

  deleteEvent(id: number) {
    //console.log(id);
    this.eventService.deleteEvent(id).subscribe(
      data => {
        console.log('deleted');
        this.getEvent();
      }
    )
  }

  latConvert(lat) {
    return Number(lat)
  }

  lngConvert(lng) {
    return Number(lng)
  }

  attendInfo: any = [];
  attendCreate: any = {};
  attendingArray: any = [];

  fetchmyAttending() {
    this.attendService.getMyAttending().subscribe(
      data => {
        this.attendInfo = data;
        //console.log(this.attendInfo);
        for (let a of this.attendInfo) {
          this.attendingArray.push(a.eventId);
        }
        //console.log(this.attendingArray);
      }
    )
  }
  attendButton(event) {
    this.attendCreate["username"] = event.id;
    this.attendCreate["eventId"] = event.id;
    this.attendCreate['eventTitle'] = event.title;
    this.attendCreate['date'] = event.date;
    //console.log(this.attendCreate);
    this.attendInfo.push(this.attendCreate);
    //console.log(this.attendInfo);
    this.attendService.createAttendEvent(this.attendCreate).subscribe(
      data => {
        //console.log(data);
        // console.log(data);
        this.fetchmyAttending();
      }
    )
  }
  unattendButton(eventId) {
    console.log(eventId)
    this.attendService.deleteAttend(eventId).subscribe(
      data => {
        this.fetchmyAttending();
        //console.log('deleted')
        let indexArray = this.attendingArray.indexOf(eventId);
        this.attendingArray.splice(indexArray);
      }
    )
  }


}
