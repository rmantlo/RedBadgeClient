import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HostBinding, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  login: boolean = false;
  signup: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) { }


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
