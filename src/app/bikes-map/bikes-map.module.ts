import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { BikesMapRoutingModule } from './bikes-map-routing.module';
import { MapComponent } from './map/map.component';

const mapsApiKey = 'AIzaSyD6VNzmwUhhCw-Nwq3Q_YBg4wZ8rvVgc6Q';

@NgModule({
  imports: [
    CommonModule,
    BikesMapRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: mapsApiKey,
    }),
  ],
  declarations: [MapComponent],
})
export class BikesMapModule {}
