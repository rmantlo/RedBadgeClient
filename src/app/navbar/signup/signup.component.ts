import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup: FormGroup;
  token: any;

  constructor(private formBuild: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.signup = this.formBuild.group({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }
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

}
