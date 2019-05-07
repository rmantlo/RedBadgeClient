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
    console.log('login')
    this.login = true;
    this.signup = false;
  }
  signupToggle() {
    console.log('signup')
    this.signup = true;
    this.login = false;
  }
  logout(){
    localStorage.clear();
  }

}
