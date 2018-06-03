import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RestService } from '../../core/rest.service';
import { AuthenticationService } from '../../core/authentication.service';

@Component({
  selector: 'ub-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rest: RestService,
    private authentication: AuthenticationService,
  ) {}

  ngOnInit() {}

  onCodeScanned(dockId: string) {
    this.rest
      .startRide(this.authentication.getLoggedUser().id, Number(dockId))
      .subscribe(result => {
        // TODO: start ride, go to timer
        this.router.navigate(['../status'], { relativeTo: this.route });
      });
  }
}
