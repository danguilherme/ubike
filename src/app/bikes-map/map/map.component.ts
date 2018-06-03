import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ub-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() {}

  ngOnInit() {}
}
