import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { BikesMapRoutingModule } from './bikes-map-routing.module';
import { BikesMapComponent } from './bikes-map.component';
import { MapComponent } from './map/map.component';
import { PanelComponent } from './panel/panel.component';
import { DistanceSelectComponent } from './distance-select/distance-select.component';

const mapsApiKey = 'AIzaSyD6VNzmwUhhCw-Nwq3Q_YBg4wZ8rvVgc6Q';

@NgModule({
  imports: [
    CommonModule,
    BikesMapRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: mapsApiKey,
    }),
  ],
  declarations: [BikesMapComponent, MapComponent, PanelComponent, DistanceSelectComponent],
})
export class BikesMapModule {}
