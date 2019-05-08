import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  login: boolean = false;
  signup: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  loginToggle() {
    this.login = true;
    this.signup = false;
  }
  signupToggle() {
    this.signup = true;
    this.login = false;
  }
  logout(){
    localStorage.clear();
  }
  toggle(){
    this.signup = false;
    this.login = false;
  }

}
