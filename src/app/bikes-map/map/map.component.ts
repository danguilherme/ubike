import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
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

  selectedMarker: Marker;

  @Output() select = new EventEmitter();
  @ViewChild(AgmMap) map: AgmMap;

  constructor(
    private rest: RestService,
    private mapsApiLoader: MapsAPILoader,
    private geolocation: GeolocationService,
  ) {}

  ngOnInit() {
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

    this.rest.fetchNearDocks(this.user, 7).subscribe(b => this.updateBikes(b));

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
    this.selectedMarker = marker;
    this.select.emit(this.selectedMarker);
  }
}
