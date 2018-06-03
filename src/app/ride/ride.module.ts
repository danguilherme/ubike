import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RideRoutingModule } from './ride-routing.module';
import { StartComponent } from './start/start.component';
import { QrcodeReaderComponent } from './qrcode-reader/qrcode-reader.component';

@NgModule({
  imports: [
    CommonModule,
    RideRoutingModule
  ],
  declarations: [StartComponent, QrcodeReaderComponent]
})
export class RideModule { }
