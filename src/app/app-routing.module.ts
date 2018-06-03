import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '',
    // component: LandingComponent,
    redirectTo: 'bikes',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
  },
  {
    path: 'bikes',
    loadChildren: './bikes-map/bikes-map.module#BikesMapModule',
  },
  {
    path: 'bikes/ride',
    loadChildren: './ride/ride.module#RideModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
