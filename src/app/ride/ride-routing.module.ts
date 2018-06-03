import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './start/start.component';
import { StatusComponent } from './status/status.component';
import { EndComponent } from './end/end.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full',
  },
  {
    path: 'start',
    component: StartComponent,
  },
  {
    path: 'status',
    component: StatusComponent,
  },
  {
    path: 'end',
    component: EndComponent,
  },
  {
    path: 'summary',
    component: SummaryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RideRoutingModule {}
