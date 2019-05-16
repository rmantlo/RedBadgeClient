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
