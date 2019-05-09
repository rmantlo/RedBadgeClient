import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Calendar } from '@fullcalendar/core';
import { EventsService } from '../../services/events.service';


// let calendar = new Calendar(calendarEl, {
//   events: [
//     {
//       title: 'event title',
//       start: '2019-5-9',
//       end: '2019-5-9'
//     }
//   ]
// })


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendarPlugins = [dayGridPlugin];

  constructor(private eventService: EventsService) { }

  getEvents(){

  }

  ngOnInit() {
  }

}
