import { Component, OnInit } from '@angular/core';
import * as M from '../../assets/materialize-css/dist/js/materialize.min.js'
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  options: {}

  ngOnInit() {
    
    // This is for the Carousel itself
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, this.options);

// This is for the Dropdown options menues inside of the carousel
      var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, this.options);


    }
  }
