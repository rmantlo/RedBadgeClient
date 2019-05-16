import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';

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

  constructor(private eventService: EventsService) { }


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
    this.getEvent();
    this.role = localStorage.getItem("role");
  }

  deleteEvent(id: number){
    //console.log(id);
    this.eventService.deleteEvent(id).subscribe(
      data => {
        console.log('deleted');
        this.getEvent();
      }
    )
  }

}
