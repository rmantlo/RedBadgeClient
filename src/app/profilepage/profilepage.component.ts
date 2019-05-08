import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { EventsService } from '../services/events.service';


@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent implements OnInit {
  userInfo: any;

  constructor(private userService: UserService, private eventService: EventsService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.userService.getUser().subscribe(data => {
      this.userInfo = data;
    })
  }

}
