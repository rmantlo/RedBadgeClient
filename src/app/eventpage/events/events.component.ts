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
  trueValue: boolean = true;
  cardImage: any;

  constructor(private eventService: EventsService) { }


  // create a for-loop & assign a pic to each keyword.
  // separateTypes() {
  //   for (let e of this.events) {
  //     if (e.keyword === 'running' || e.keyword === 'gym' || e.keyword === 'crossfit' || e.keyword === 'kick boxing' || e.keyword === 'yoga') {
  //       this.exerciseEvents = this.exerciseEvents.concat(e);
  //     } else if (e.keyword === 'soccer' || e.keyword === 'basketball' || e.keyword === 'football' || e.keyword === 'golf' || e.keyword === 'tennis') {
  //       this.sportEvents = this.sportEvents.concat(e);
  //     } else if (e.keyword === 'hiking' || e.keyword === 'cycling' || e.keyword === 'rock climbing' || e.keyword === 'mountain biking' || e.keyword === 'kayaking') {
  //       this.outdoorEvents = this.outdoorEvents.concat(e);
  //     }
  //   }
  //   console.log(this.exerciseEvents)
  //   console.log(this.sportEvents);
  //   console.log(this.outdoorEvents);
  // }

  addMap: any = {
    lat: "30.45555",
    lng: "42.35999"
  }

  latitude: number = 39.96514511660002;
  longitude: number = -86.00871011355463;
  locationChosen: boolean = false;
  streetViewControl: boolean= false;

  onChoseLocation(event) {
    console.log(event);
    this.addMap = event.coords;
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }


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

  setCardImage(keyword) {
    if(keyword === 'running') {
      this.cardImage = '../../../assets/runners.jpeg'
    }
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

  latConvert(lat) {
    return Number(lat) 
  }

  lngConvert(lng) {
    return Number(lng) 
  }
}
