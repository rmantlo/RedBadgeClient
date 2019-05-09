import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { EventsService } from '../services/events.service';


@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent implements OnInit {
  userInfo: any;
  settingPopup: boolean = false;
  deletePopup: boolean = false;

  updateInfo: any={};

  myEventInfo: any;

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

}
