import { Component, OnInit, Input, OnChanges } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { AttendingService } from '../../services/attending.service';



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @Input() attendingEventData: any;
  attendingArray: any = [];
  calendarPlugins = [dayGridPlugin];
  
  example: any = [
    {title:"hello", date: "2019-05-11"},
    {title:"super", date:"2019-05-22T04:00:00.000Z"}
  ]

  constructor() { }

  ngOnInit() {
  }
  createArray() {
    //console.log(this.attendingEventData)
    for (let e of this.attendingEventData) {
      //console.log(e)
      let something = { title: e.eventTitle, date: e.date }
      this.attendingArray = this.attendingArray.concat(something);
      //console.log(this.attendingArray);
    }
  }

  ngOnChanges() {
    this.createArray();
    // console.log(this.attendingArray);
  }

}
