import { Component, OnInit, ViewChild } from '@angular/core';
import { AgmMap, MapsAPILoader, LatLngBounds } from '@agm/core';

import { RestService } from '../../core/rest.service';
import { Dock } from '../../core/models/dock';
import { GeolocationService } from '../../core/geolocation.service';
import { Marker } from '../../core/models/marker';

@Component({
  selector: 'ub-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  user: Marker;
  bikes: Dock[];
  latLngBounds: LatLngBounds;

  @ViewChild(AgmMap) map: AgmMap;

  constructor(
    private rest: RestService,
    private mapsApiLoader: MapsAPILoader,
    private geolocation: GeolocationService,
  ) {}

  ngOnInit() {
    this.rest.fetchNearDocks(7).subscribe(b => this.updateBikes(b));

    this.geolocation.currentPosition$.subscribe(position => {
      this.updateCurrentPosition(position);
    });
  }

  updateBikes(bikes: Dock[]): any {
    this.bikes = bikes;

    this.updateBounds();
  }

  updateCurrentPosition(userPosition: Position): any {
    const { latitude: lat, longitude: lng } = userPosition.coords;

    this.user = { lat, lng };

    this.updateBounds();
  }

  async updateBounds() {
    await this.mapsApiLoader.load();

    const allMarkers = [this.user, ...this.bikes].filter(x => !!x);
    const latLngBounds = new window['google'].maps.LatLngBounds();

    allMarkers.forEach(location => {
      latLngBounds.extend(
        new window['google'].maps.LatLng(location.lat, location.lng),
      );
    });

    this.latLngBounds = latLngBounds;
  }

  onMarkerClick(marker: Dock, index: number) {
    console.log(`clicked the marker:`, marker);
  }
}
