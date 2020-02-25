import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1})), ]),
    ])
  ]
})
export class NavigationBarComponent implements OnInit {

  currentTime: any;
  constructor() { }

  ngOnInit() {
    this.currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  }
}
