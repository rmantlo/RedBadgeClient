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
  
  setToken(){
    this.token = localStorage.getItem('token');
    //console.log(this.token)
  }


  ngOnInit() {
    // this.getEvent(); I commented-this-out b/c it was throwing an error amw
    this.setToken();
  }

}
