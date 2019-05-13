import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private eventService: EventsService) { }

  event: any;

  getEvent(): any{
    this.eventService.allEvents().subscribe(
      data => {
        //console.log(data);
        this.event = data;
        // this.event.reverse();
        // this.certainEvent = this.event.slice(0,20);
      }
    )
  }

  ngOnInit() {
    this.getEvent()
  }

}
