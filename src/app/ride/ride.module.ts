import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RideRoutingModule } from './ride-routing.module';
import { StartComponent } from './start/start.component';
import { QrcodeReaderComponent } from './qrcode-reader/qrcode-reader.component';
import { StatusComponent } from './status/status.component';
import { TimerComponent } from './timer/timer.component';
import { EndComponent } from './end/end.component';

@NgModule({
  imports: [
    CommonModule,
    RideRoutingModule
  ],
  declarations: [StartComponent, QrcodeReaderComponent, StatusComponent, TimerComponent, EndComponent]
})
export class RideModule { }
