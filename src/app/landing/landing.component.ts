import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ub-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('hello');
  }
}
