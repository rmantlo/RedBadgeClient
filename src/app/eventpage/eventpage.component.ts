import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AttendingService } from '../services/attending.service';



export interface Event {
  value: string;
  viewValue: string;
}

export interface EventGroup {
  disabled?: boolean;
  name: string;
  event: Event[];
}

@Component({
  selector: 'app-eventpage',
  templateUrl: './eventpage.component.html',
  styleUrls: ['./eventpage.component.css']
})
export class EventpageComponent implements OnInit {

  event: any;
  certainEvent: any;
  token: any;
  createAttend: any = {};

  addEventClicked: boolean = false;
  addEvent: FormGroup;
  addMap: any;

  latitude: number = 39.96514511660002;
  longitude: number = -86.00871011355463;
  locationChosen: boolean = false;

  eventGroup: any;
  newEventInfo: any;

  eventControl = new FormControl();
  eventGroups: EventGroup[] = [
    {
      name: 'Exercise',
      event: [
        { value: 'running', viewValue: 'Running' },
        { value: 'gym', viewValue: 'Gym' },
        { value: 'crossfit', viewValue: 'Crossfit' },
        { value: 'kick boxing', viewValue: 'Kick Boxing' },
        { value: 'yoga', viewValue: 'Yoga' }
      ]
    },
    {
      name: 'Sports',
      event: [
        { value: 'basketball', viewValue: 'Basketball' },
        { value: 'football', viewValue: 'Football' },
        { value: 'tennis', viewValue: 'Tennis' },
        { value: 'soccer', viewValue: 'Soccer' },
        { value: 'golf', viewValue: 'Golf' }
      ]
    },
    {
      name: 'Outdoor',
      event: [
        { value: 'hiking', viewValue: 'Hiking' },
        { value: 'cycling', viewValue: 'Cycling' },
        { value: 'mountain biking', viewValue: 'Mountain Biking' },
        { value: 'rock climbing', viewValue: 'Rock Climbing' },
        { value: 'kayaking', viewValue: 'Kayaking' },

      ]
    }
  ];

  constructor(private formBuilder: FormBuilder, private eventsService: EventsService, private attendService: AttendingService) { }

  setToken() {
    this.token = localStorage.getItem('token');
    //console.log(this.token)
  }

  ngOnInit() {
    this.addEvent = this.formBuilder.group({
      title: new FormControl(),
      location: new FormControl(),
      date: new FormControl(),
      keyword: new FormControl(),
      description: new FormControl()
    });
    this.fetchEvents();
    this.setToken();
  }
  onChoseLocation(event) {
    console.log(event);
    this.addMap = event.coords;
    console.log(this.addMap);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }

  openEventModal() {
    this.addEventClicked = !this.addEventClicked;
  }
  closeEventModal() {
    this.addEventClicked = false;
  }


  submitClick() {
    console.log(this.eventGroup)
    this.submitNewEvent();
  }

  events: any = [];

  fetchEvents() {
    this.eventsService.allEvents().subscribe(
      data => {
        this.events = data;
        this.events.reverse();
        console.log(data);
        //this.separateTypes(this.events);
        //this.fetchmyAttending();
      }
    )
  }
  submitNewEvent() {
    this.eventGroup = { ...this.addEvent.value, ...this.addMap };
    this.events.unshift(this.eventGroup);
    console.log(this.eventGroup)
    this.eventsService.createEvent(this.eventGroup).subscribe(
      datas => {
        this.newEventInfo = datas.data;
        this.createAttendOnEvent(datas.data);
      }
    )
    this.addEventClicked = !this.addEventClicked;
  }
  createAttendOnEvent(eventInfo) {
    this.createAttend["username"] = eventInfo.userId;
    this.createAttend["eventId"] = eventInfo.id;
    this.createAttend['eventTitle'] = eventInfo.title;
    this.createAttend['date'] = eventInfo.date;
    console.log(this.createAttend);
    this.attendService.createAttendEvent(this.createAttend).subscribe(
      data => {
        console.log(data);
      }
    )
  }




}
