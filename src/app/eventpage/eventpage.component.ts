import { Component, OnInit } from '@angular/core';
// import { CarouselComponent } from '../carousel/carousel.component';
import { EventsService } from '../services/events.service'


@Component({
  selector: 'app-eventpage',
  templateUrl: './eventpage.component.html',
  styleUrls: ['./eventpage.component.css']
})
export class EventpageComponent implements OnInit {
  event: any;
  certainEvent: any;
  token: any;

  constructor(private eventService: EventsService) { }
  
  getEvent(): any{
    this.eventService.getEvent().subscribe(
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
    this.getEvent();
    this.setToken();
  }

}
