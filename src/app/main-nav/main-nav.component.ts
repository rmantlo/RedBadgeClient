import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  login: boolean = false;
  signup: boolean = false;
  loggedIn: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {
  }
  ngOnInit(){
    this.isLoggedIn();
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
    window.location.reload();
  }
  toggle() {
    this.signup = false;
    this.login = false;
  }


}
