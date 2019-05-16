import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  token: any;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  signupGroup: any;

  constructor(private formBuild: FormBuilder, private userService: UserService, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    });
    this.secondFormGroup = this._formBuilder.group({
      image: new FormControl(),
    });
  }
  signupClick() {
    if (this.secondFormGroup.value.image === null || this.secondFormGroup.value.image === undefined || this.secondFormGroup.value.image === '') {
      this.secondFormGroup.value.image = '../../../assets/profiledefault.jpg';
      this.signupGroup = { ...this.firstFormGroup.value, ...this.secondFormGroup.value };
      this.onSubmit();
      this.signupToggle();
    } else {
      this.signupGroup = { ...this.firstFormGroup.value, ...this.secondFormGroup.value };
      this.onSubmit();
      this.signupToggle();
    }
    console.log(this.signupGroup);
  }
  @Output() onSignupToggle = new EventEmitter<any>();

  onSubmit(): void {
    console.log(this.signupGroup);
    if (this.signupGroup.password.length < 5) {
      alert('password must be 5 or more characters long')
    } else {
      this.userService.signup(this.signupGroup).subscribe(
        data => {
          console.log(data);
          let data1: any = data;
          localStorage.setItem('token', data1.sessionToken);
          localStorage.setItem('role', data1.user.role)
          this.token = data1.sessionToken;
          if (this.token) {
            window.location.href='/events';
          }
        },
        err => {
          console.log(err.error.errors);
          for (let e of err.error.errors) {
            console.log(e);
            if (e.message === 'username must be unique') {
              alert('username already taken');
            } else if (e.message === 'email must be unique') {
              alert('email already has an account')
            }
          }
          // if(err.errors)
        }
      )
    }
  }
  signupToggle() {
    this.onSignupToggle.emit();
  }

}
