import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ub-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  startTime: Date;

  constructor() {}

  ngOnInit() {
    this.startTime = new Date();
  }
}
