import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service'
import { EventsService } from 'src/app/services/events.service';
import { AttendingService } from 'src/app/services/attending.service';

@Component({
  selector: 'app-delete-alert',
  templateUrl: './delete-alert.component.html',
  styleUrls: ['./delete-alert.component.css']
})
export class DeleteAlertComponent implements OnInit {

  constructor(private userService: UserService, private eventService: EventsService, private attendService: AttendingService) { }
  @Output() deleteToggle = new EventEmitter<any>();

  ngOnInit() {
  }

  toggle() {
    this.deleteToggle.emit();
  }
  deleteUser() {
    console.log('USER GONE 5EVA');
    this.eventService.deleteAllEvents().subscribe(data => console.log('user events deleted'))
    this.attendService.deleteAllAttend().subscribe(data => console.log('user attending deleted'))
    this.userService.deleteUser().subscribe(
      data => {
        console.log('so sad');
        window.location.reload();
        localStorage.removeItem('token');
      }
    )
  }
}
