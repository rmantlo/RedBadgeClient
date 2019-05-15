import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';



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
  
  addEventClicked: boolean = false;
  addEvent: FormGroup;
  addMap: FormGroup;
 

  eventGroup: any = {};

  eventControl = new FormControl();
  eventGroups: EventGroup[] = [
    {
      name: 'Exercise',
      event: [
        {value: 'running', viewValue: 'Running'},
        {value: 'gym', viewValue: 'Gym'},
        {value: 'crossfit', viewValue: 'Crossfit'},
        {value: 'zumba', viewValue: 'Zumba'},
        {value: 'yoga', viewValue: 'Yoga'}
      ]
    },
    {
      name: 'Sports',
      event: [
        {value: 'basketball', viewValue: 'Basketball'},
        {value: 'tennis', viewValue: 'Tennis'},
        {value: 'soccer', viewValue: 'Soccer'},
        {value: 'golf', viewValue: 'Golf'}
      ]
    },
    {
      name: 'Outdoor',
      event: [
        {value: 'hiking', viewValue: 'Hiking'},
        {value: 'cycling', viewValue: 'Cycling'},
        {value: 'rock-climbing', viewValue: 'Rock-Climbing'},
        {value: 'kayaking', viewValue: 'Kayaking'},
        
      ]
    }
  ];

  constructor(private formBuilder: FormBuilder, private eventsService: EventsService) { }
  
  setToken(){
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
    this.addMap = this.formBuilder.group({
      lat: "30.45555",
      lng: "42.35999"
    });
    
    this.setToken();
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

  submitNewEvent() {
    this.eventGroup = {...this.addEvent.value, ...this.addMap.value};
    // console.log(this.addEvent)
    // console.log(this.addMap)
    // console.log(this.eventGroup)
    this.eventsService.createEvent(this.eventGroup).subscribe(
      data => {
        console.log(data);
      }
    )
    this.addEventClicked= !this.addEventClicked;
  }
}
