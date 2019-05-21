import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AttendingService } from '../../services/attending.service';


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
  streetViewControl: any = false;

  certainEvent: any;
  createAttend: any = {};

  addEventClicked: boolean = false;
  addEvent: FormGroup;
  addMapOnModal: any;

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

  constructor(private formBuilder: FormBuilder, private eventService: EventsService, private attendService: AttendingService) { }

  addMap: any = {
    lat: "30.45555",
    lng: "42.35999"
  }



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

  setToken() {
    this.token = localStorage.getItem('token');
    //console.log(this.token)
  }

  ngOnInit() {
    this.getEvent();
    this.role = localStorage.getItem("role");
    this.addEvent = this.formBuilder.group({
      title: new FormControl(),
      location: new FormControl(),
      date: new FormControl(),
      keyword: new FormControl(),
      description: new FormControl()
    });
    this.fetchEvents();
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
    this.eventService.allEvents().subscribe(
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
    this.eventService.createEvent(this.eventGroup).subscribe(
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
