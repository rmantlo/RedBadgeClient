import { Component, OnInit } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';
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
  keywordGroup: FormGroup
 

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
  
  getEvent(): any{
    this.eventsService.getEvent().subscribe(
      data => {
        //console.log(data);
        this.event = data;
        // this.event.reverse();
        // this.certainEvent = this.event.slice(0,20);
        console.log(this.certainEvent);
      }
    )
  }
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
    this.keywordGroup= this.formBuilder.group({
      keyword: new FormControl()
    });
    this.getEvent();
    this.setToken();
  }

  openEventModal() {
    console.log("Yeah")
    this.addEventClicked = !this.addEventClicked;
  }
  closeEventModal() {
    this.addEventClicked = false;
  }

  keywordFunction(i) {
    console.log(i)
  }


  submitClick() {
    console.log(this.eventGroup)
    this.submitNewEvent();
  }

  submitNewEvent() {
    this.eventGroup = {...this.addEvent.value, ...this.addMap.value};
    console.log(this.addEvent)
    console.log(this.addMap)
    console.log(this.eventGroup)
    this.eventsService.createEvent(this.eventGroup).subscribe(
      data => {
        console.log(data);
      }
    )
    this.addEventClicked= !this.addEventClicked;
  }
}
