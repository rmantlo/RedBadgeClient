import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
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
    this.signupGroup = { ...this.firstFormGroup.value, ...this.secondFormGroup.value };
    console.log(this.signupGroup);
    this.onSubmit();
    this.signupToggle();
  }
  @Output() onSignupToggle = new EventEmitter<any>();

  onSubmit(): void {
    console.log(this.signupGroup);
    this.userService.signup(this.signupGroup).subscribe(
      data => {
        console.log(data);
        let data1: any = data;
        localStorage.setItem('token', data1.sessionToken);
        this.token = data1.sessionToken;
      }
    )
  }
  signupToggle() {
    this.onSignupToggle.emit();
  }

}
