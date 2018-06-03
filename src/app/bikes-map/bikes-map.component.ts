import { Component, OnInit } from '@angular/core';
import { Marker } from '../core/models/marker';
import { Dock } from '../core/models/dock';

@Component({
  selector: 'ub-bikes-map',
  templateUrl: './bikes-map.component.html',
  styleUrls: ['./bikes-map.component.scss'],
})
export class BikesMapComponent implements OnInit {
  marker: Marker;

  constructor() {}

  ngOnInit() {}

  onDockSelected(dock: Dock) {
    this.marker = dock;
  }

  selectDock(dock: Dock) {

  }
}
