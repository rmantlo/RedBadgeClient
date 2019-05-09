import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// goes with Google maps extension
// import {Title} from '@angular/platform-browser';
// import {Location, Appearance} from '@angular-material-extensions/google-maps-autocomplete';
// import {} from '@types/googlemaps';
// import PlaceResult = google.maps.places.PlaceResult;

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { EventsService } from '../services/events.service';


@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
  // Encapsulation goes with Google maps extension
  // encapsulation: ViewEncapsulation.None,
})
export class ProfilepageComponent implements OnInit {
  userInfo: any;
  settingPopup: boolean = false;
  deletePopup: boolean = false;

  updateInfo: any={};
  myEventInfo: any;

  // public appearance = Appearance;
  // public zoom: number;
  // public latitude: number;
  // public longitude: number;
  // public selectedAddress: PlaceResult;

  // constructor() { }
  // private titleService:Title
  // ngOnInit() {
  //   this.titleService.setTitle('Home | @angular-material-extensions/google-maps-autocomplete');

  //   this.zoom = 10;
  //   this.latitude = 52.520008;
  //   this.longitude = 13.404954;
  

  constructor(private userService: UserService, private eventService: EventsService, private formBuild: FormBuilder) { }
  getUser() {
    this.userService.getUser().subscribe(data => {
      this.userInfo = data;
    })
  }
  myEvents(){
    this.eventService.myEvents().subscribe(
      data => {
        console.log(data);
        this.myEventInfo = data;
      }
    )
  }
  ngOnInit() {
    this.getUser();
    this.myEvents();
  }

  toggleSettingPopup() {
    this.settingPopup = !this.settingPopup;
  }
  onSubmit() {
    console.log(this.updateInfo);
    this.userService.updateUser(this.updateInfo).subscribe(
      data => {
        console.log(data);
        this.getUser();
      }
    )
  }
  deleteAlert() {
    this.deletePopup = !this.deletePopup;
  }

  //   this.setCurrentPosition();
  // }
  // private setCurrentPosition() {
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.latitude = position.coords.latitude;
  //       this.longitude = position.coords.longitude;
  //       this.zoom = 12;
  //     });
  //   }
  // }

  // onAutocompleteSelected(result: PlaceResult) {
  //   console.log('onAutocompleteSelected: ', result);
  // }

  // onLocationSelected(location: Location) {
  //   console.log('onLocationSelected: ', location);
  //   this.latitude = location.latitude;
  //   this.longitude = location.longitude;
  // }
}

