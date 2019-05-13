import { Component, OnInit, AfterViewInit } from '@angular/core';
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


  ngOnInit() {
    this.fetchEvents();

    let timer = setInterval(function () {
      var elems: NodeListOf<Element> = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, this.options, { fullWidth: true });
      clearInterval(timer)
    }, 500)
    var elems: NodeListOf<Element> = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, this.options);
  }
  fetchEvents() {
    this.eventService.allEvents().subscribe(
      data => {
        this.events = data;
        console.log(data);
        this.separateTypes();
      }
    )
  }
  separateTypes() {
    for (let e of this.events) {
      if (e.keyword === 'running') {
        console.log(e)
        this.exerciseEvents = this.exerciseEvents.concat(e);
      } else if (e.keyword === 'soccer') {
        this.sportEvents = this.sportEvents.concat(e);
      } else if (e.keyword === 'hiking') {
        this.outdoorEvents = this.outdoorEvents.concat(e);
      }
    }
    console.log(this.exerciseEvents)
    console.log(this.sportEvents);
    console.log(this.outdoorEvents);
  }

}


  



