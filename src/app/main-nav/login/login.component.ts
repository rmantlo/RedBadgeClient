import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  token: any;

  constructor(private formbuild: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.login = this.formbuild.group({
      username: new FormControl(),
      password: new FormControl()
    })
  }
  @Output() onLoginToggle = new EventEmitter<any>();

  onSubmit(): void {
    console.log(this.login.value);
    this.userService.login(this.login.value).subscribe(
      data => {
        console.log(data);
        let data1: any = data;
        localStorage.setItem('token', data1.sessionToken);
        localStorage.setItem('role', data1.user.role);
        this.token = data1.sessionToken;
        if (this.token) {
          window.location.href='/events';
        }
      },
      err => {
        alert('username or password is incorrect!')
      }
    )
    this.loginToggle();
  }

  loginToggle() {
    this.onLoginToggle.emit()
  }

}
