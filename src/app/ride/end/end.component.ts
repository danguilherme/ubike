import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestService } from '../../core/rest.service';
import { AuthenticationService } from '../../core/authentication.service';
import { StorageService } from '../../core/storage.service';

@Component({
  selector: 'ub-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.scss'],
})
export class EndComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rest: RestService,
    private storage: StorageService,
    private authentication: AuthenticationService,
  ) {}

  ngOnInit() {}

  onCodeScanned(dockId: string) {
    this.rest
      .endRide(this.authentication.loggedUser.id, Number(dockId))
      .subscribe(result => {
        this.storage.set('rideEnd', result);
        this.router.navigate(['../summary'], { relativeTo: this.route });
      });
  }
}
