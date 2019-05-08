import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-delete-alert',
  templateUrl: './delete-alert.component.html',
  styleUrls: ['./delete-alert.component.css']
})
export class DeleteAlertComponent implements OnInit {

  constructor(private userService: UserService) { }
  @Output() deleteToggle = new EventEmitter<any>();

  ngOnInit() {
  }

  toggle(){
    this.deleteToggle.emit();
  }
  deleteUser(){
    console.log('USER GONE 5EVA');
    this.userService.deleteUser().subscribe(
      data => {
        console.log('so sad');
        window.location.reload();
        localStorage.removeItem('token');
      }
    )
  }
}
