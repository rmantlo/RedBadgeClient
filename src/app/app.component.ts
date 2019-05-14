import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redBadgeClient';
  latitude: number = 51.678418;
  longitude: number = 7.809007;
  locationChosen: boolean= false;

 onChoseLocation(event) {
   console.log(event);
  this.latitude = event.coords.lat;
  this.longitude= event.coords.lng;
  this.locationChosen = true;
}
}
