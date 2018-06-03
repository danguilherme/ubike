import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BikesMapRoutingModule } from './bikes-map-routing.module';
import { MapComponent } from './map/map.component';

@NgModule({
  imports: [
    CommonModule,
    BikesMapRoutingModule
  ],
  declarations: [MapComponent]
})
export class BikesMapModule { }
