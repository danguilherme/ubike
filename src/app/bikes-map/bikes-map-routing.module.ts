import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikesMapComponent } from './bikes-map.component';

const routes: Routes = [
  {
    path: '',
    component: BikesMapComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikesMapRoutingModule {}
