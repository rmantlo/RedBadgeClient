import { Component, OnInit } from '@angular/core';
import * as M from '../../assets/materialize-css/dist/js/materialize.min.js'

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent implements OnInit {
  options: {}

  constructor() { }

  ngOnInit() {

    var elems: NodeListOf<Element> = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, this.options);
  }

}
