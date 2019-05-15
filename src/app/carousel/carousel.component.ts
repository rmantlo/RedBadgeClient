import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import * as M from '../../assets/materialize-css/dist/js/materialize.min.js'

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

  constructor(private eventService: EventsService) { }

  attendInfo:any = {};

  ngOnInit() {
    this.fetchEvents();

    setTimeout(function () {
      var elems: NodeListOf<Element> = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, this.options);
      var elems: NodeListOf<Element> = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems, this.options);
    }, 1000)
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
  separateTypes() {
    for (let e of this.events) {
      if (e.keyword === 'running' || e.keyword === 'gym' ||e.keyword === 'crossfit' ||e.keyword === 'kick boxing'||e.keyword === 'yoga') {
        //console.log(e)
        this.exerciseEvents = this.exerciseEvents.concat(e);
      } else if (e.keyword === 'soccer' || e.keyword === 'basketball'||e.keyword === 'football'||e.keyword === 'golf'||e.keyword === 'tennis') {
        this.sportEvents = this.sportEvents.concat(e);
      } else if (e.keyword === 'hiking' || e.keyword === 'cycling' || e.keyword === 'rock climbing' || e.keyword === 'mountain biking' || e.keyword === 'kayaking') {
        this.outdoorEvents = this.outdoorEvents.concat(e);
      }
    }
    console.log(this.exerciseEvents)
    console.log(this.sportEvents);
    console.log(this.outdoorEvents);
  }

  attendButton(event){
    console.log('click');
    console.log(event);
    this.attendInfo["username"] = event.id;
    this.attendInfo["eventId"] = event.id;
    this.attendInfo['eventTitle'] = event.title;
    this.attendInfo['date'] = event.date;
    console.log(this.attendInfo);
  }
}






