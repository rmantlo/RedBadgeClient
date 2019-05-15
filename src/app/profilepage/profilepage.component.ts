import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { EventsService } from '../services/events.service';
import { AttendingService } from '../services/attending.service';

// goes with Google maps extension
// import {Title} from '@angular/platform-browser';
// import {Location, Appearance} from '@angular-material-extensions/google-maps-autocomplete';
// import {} from '@types/googlemaps';
// import PlaceResult = google.maps.places.PlaceResult;


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
  createToggle: boolean = true;

  updateInfo: any = {};
  myEventInfo: any;
  myAttendEvents: any = [];
  allAttendEvents: any = [];

  editForm: FormGroup;


  modal: boolean = false;


  constructor(private userService: UserService, private eventService: EventsService, private attendService: AttendingService, private formBuilder: FormBuilder) { }
  
  OpenModal() {
    this.modal = true
  }

  getUser() {
    this.userService.getUser().subscribe(data => {
      this.userInfo = data;
    })
  }

  myEvents() {
    this.eventService.myEvents().subscribe(
      data => {
        //console.log(data);
        this.myEventInfo = data;
      }
    )
  }
  myAttending() {
    this.attendService.getMyAttending().subscribe(
      data => {
        //console.log(data);
        this.myAttendEvents = data;
        //console.log(this.myAttendEvents)
        for (let e of this.myAttendEvents) {
          //console.log(e.eventId);
          let eventId = e.eventId;
          this.eventService.eventById(eventId).subscribe(
            data => {
              //console.log(data);
              let attendData = data;
              this.allAttendEvents = this.allAttendEvents.concat(attendData)
              //console.log(this.allAttendEvents);
            }
          )
        }

      }
    )
  }


  toggleSettingPopup() {
    this.settingPopup = !this.settingPopup;
  }

  editEvent(id: number) {
    this.eventService.editEvent(id).subscribe(
      data => {
        console.log('edited');
      }
    )
  }

  deleteEvent(id: number) {
    console.log(id);
    this.eventService.deleteEvent(id).subscribe(
      data => {
        console.log('deleted');
        this.deleteAlert;
        window.location.reload();
        this.myEvents();
      }
    )
  }


  ngOnInit() {
    this.getUser();
    this.myEvents();
    this.myAttending();
    // let eventId = localStorage.getItem.toString("eventId");

    // this.editForm = this.formBuilder.group({
    //   'title': ['', Validators.required],
    //   'location': ['', Validators.required],
    //   'date': ['', Validators.required],
    //   'description': ['', Validators.required],
    //   'keyword': ['', Validators.required],
    //   'lng': ['', Validators.required],
    //   'lat': ['', Validators.required]

  }

  // onFormSubmit(form: NgForm) {
  //   this.isLoadingResults = true;
  //   this.myEventInfo.editEvent(this._id, form)
  //     .subscribe(res => {
  //       let id = res['_id'];
  //       this.isLoadingResults = false;
  //     }, (err) => {
  //       console.log(err);
  //       this.isLoadingResults = false;
  //     }
  //     );
  // }




  deleteAlert() {
    this.deletePopup = !this.deletePopup;
  }
}
  // toggleCreate(){
  //   this.createToggle = !this.createToggle;
  // }



  // public appearance = Appearance;
  // public zoom: number;
  // public latitude: number;
  // public longitude: number;
  // public selectedAddress: PlaceResult;

  //constructor() { }
  // private titleService:Title
  //ngOnInit() {
    //   this.titleService.setTitle('Home | @angular-material-extensions/google-maps-autocomplete');

    //   this.zoom = 10;
    //   this.latitude = 52.520008;
    //   this.longitude = 13.404954;

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