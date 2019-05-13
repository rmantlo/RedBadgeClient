import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {
  events: any;

  constructor(private eventService: EventsService) { }
  getEvents() {
    this.eventService.getEvent().subscribe(
      data => {
        console.log(data)
        this.events = data});
  }

  ngOnInit() {
    this.getEvents()
  }

}
