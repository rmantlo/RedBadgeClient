import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, FormBuilder, FormGroup} from '@angular/forms';


export interface Event {
  value: string;
  viewValue: string;
}

export interface EventGroup {
  disabled?: boolean;
  name: string;
  event: Event[];
}



@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  eventControl = new FormControl();
  eventGroups: EventGroup[] = [
    {
      name: 'Exercise',
      event: [
        {value: 'running', viewValue: 'Running'},
        {value: 'gym', viewValue: 'Gym'},
        {value: 'crossfit', viewValue: 'Crossfit'},
        {value: 'zumba', viewValue: 'Zumba'},
        {value: 'yoga', viewValue: 'Yoga'}
      ]
    },
    {
      name: 'Sports',
      event: [
        {value: 'basketball', viewValue: 'Basketball'},
        {value: 'tennis', viewValue: 'Tennis'},
        {value: 'soccer', viewValue: 'Soccer'},
        {value: 'golf', viewValue: 'Golf'}
      ]
    },
    {
      name: 'Outdoor',
      event: [
        {value: 'hiking', viewValue: 'Hiking'},
        {value: 'cycling', viewValue: 'Cycling'},
        {value: 'rock-climbing', viewValue: 'Rock-Climbing'},
        {value: 'kayaking', viewValue: 'Kayaking'},
        
      ]
    }
  ];
  constructor(private formBuilder: FormBuilder) { }
  keywordGroup: FormGroup
  
  ngOnInit() {
    this.keywordGroup= this.formBuilder.group({
      keyword: new FormControl()
    })
  }
  
  @Output() dropdown = new EventEmitter<any>();

  keywordFunction() {
    this.dropdown.emit(this.keywordGroup.value);
  }
}
