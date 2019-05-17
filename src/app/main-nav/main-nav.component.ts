import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  login: boolean = false;
  signup: boolean = false;
  loggedIn: boolean = false;
  token: any;

  

  constructor(private adminService: AdminService) {
  }
  ngOnInit(){
    this.isLoggedIn();
    this.token = localStorage.getItem('token');
  }
  isLoggedIn(){
    if(localStorage.getItem('token') == null){
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
    console.log(this.loggedIn);
  }
  loginToggle() {
    this.login = true;
    this.signup = false;
  }
  signupToggle() {
    this.signup = true;
    this.login = false;
  }
  logout() {
    localStorage.clear();
    // this.token = ''; needed?
    window.location.reload();
  }
  toggle() {
    this.signup = false;
    this.login = false;
  }


}
