import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup: FormGroup;
  token: any;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private formBuild: FormBuilder, private userService: UserService, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signup = this.formBuild.group({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    });
    this.firstFormGroup = this._formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      image: '',
    });
  }
  @Output() onSignupToggle = new EventEmitter<any>();

  onSubmit(): void {
    console.log(this.signup.value);
    this.userService.signup(this.signup.value).subscribe(
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
