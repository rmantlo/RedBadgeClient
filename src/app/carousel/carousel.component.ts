import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import * as M from '../../assets/materialize-css/dist/js/materialize.min.js';
import { AttendingService } from '../services/attending.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  options: {}

  events: any;
  exerciseEvents: any = [];
  sportEvents: any = [];
  outdoorEvents: any = [];

  attendInfo: any = [];
  attendCreate: any = {};
  attendingArray: string[] = [];

  latitude: number = 39.96514511660002;
  longitude: number = -86.00871011355463;
  draggable: boolean = false;
  locationChosen: boolean = false;
  zoomControl: boolean = false;
  streetViewControl: boolean = false;

  constructor(private eventService: EventsService, private attendService: AttendingService) { }
  onChoseLocation(event) {
    console.log(event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }

  ngOnInit() {
    this.fetchEvents();
    this.fetchmyAttending();
    setTimeout(function () {
      var elems: NodeListOf<Element> = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, this.options);
      var elems: NodeListOf<Element> = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems, this.options);

    }, 1000);
  }

  fetchEvents() {
    this.eventService.allEvents().subscribe(
      data => {
        this.events = data;
        //console.log(data);
        this.separateTypes();
      }
    )
  }

  fetchmyAttending() {
    this.attendService.getMyAttending().subscribe(
      data => {
        this.attendInfo = data;
        console.log(this.attendInfo);
        for (let a of this.attendInfo) {
          this.attendingArray.push(a.eventId);
        }
        console.log(this.attendingArray);
      }
    )
  }

  separateTypes() {
    for (let e of this.events) {
      if (e.keyword === 'running' || e.keyword === 'gym' || e.keyword === 'crossfit' || e.keyword === 'kick boxing' || e.keyword === 'yoga') {
        this.exerciseEvents = this.exerciseEvents.concat(e);
      } else if (e.keyword === 'soccer' || e.keyword === 'basketball' || e.keyword === 'football' || e.keyword === 'golf' || e.keyword === 'tennis') {
        this.sportEvents = this.sportEvents.concat(e);
      } else if (e.keyword === 'hiking' || e.keyword === 'cycling' || e.keyword === 'rock climbing' || e.keyword === 'mountain biking' || e.keyword === 'kayaking') {
        this.outdoorEvents = this.outdoorEvents.concat(e);
      }
    }
    console.log(this.exerciseEvents)
    console.log(this.sportEvents);
    console.log(this.outdoorEvents);
  }

  attendButton(event) {
    console.log('click');
    console.log(event);
    this.attendCreate["username"] = event.id;
    this.attendCreate["eventId"] = event.id;
    this.attendCreate['eventTitle'] = event.title;
    this.attendCreate['date'] = event.date;
    console.log(this.attendCreate);
    this.attendInfo.push(this.attendCreate);
    console.log(this.attendInfo);
    this.attendService.createAttendEvent(this.attendCreate).subscribe(
      data => {
        console.log(data);
        //this.fetchmyAttending();
      }
    )
  }
  unattendButton(eventId) {
    console.log(eventId)
    this.attendService.deleteAttend(eventId).subscribe(
      data => {
        //this.fetchmyAttending();
        let indexArray = this.attendingArray.indexOf(eventId);
        this.attendingArray.splice(indexArray);
      }
    )
  }
}






