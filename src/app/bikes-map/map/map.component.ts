import { Component, OnInit, ViewChild } from '@angular/core';

import { RestService } from '../../core/rest.service';
import { Bike } from '../../core/models/bike';
import { AgmMap, MapsAPILoader, LatLngBounds } from '@agm/core';

@Component({
  selector: 'ub-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  markers: Bike[];
  latlngBounds: LatLngBounds;

  @ViewChild(AgmMap) map: AgmMap;

  constructor(
    private rest: RestService,
    private mapsApiLoader: MapsAPILoader,
  ) {}

  ngOnInit() {
    this.rest.fetchNearBikes(7).subscribe(b => this.updateBikes(b));
  }

  updateBikes(bikes: Bike[]): any {
    this.markers = bikes;

    this.updateBounds();
  }

  async updateBounds() {
    await this.mapsApiLoader.load();

    this.latlngBounds = new window['google'].maps.LatLngBounds();
    this.markers.forEach(location => {
      this.latlngBounds.extend(
        new window['google'].maps.LatLng(location.lat, location.lng),
      );
    });

    setTimeout(() => {
      this.map.zoom = 8;
      this.map.maxZoom = 10;
    }, 2000);
  }

  onMarkerClick(marker: Bike, index: number) {
    console.log(`clicked the marker:`, marker);
  }
}
