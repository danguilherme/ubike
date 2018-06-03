import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/authentication.service';
import { StorageService } from '../../core/storage.service';

@Component({
  selector: 'ub-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  time = 50;

  currentCredit: number;

  data;

  get finalPrice() {
    return this.data && this.data.finalPrice;
  }

  get formattedTime() {
    return this.data && this.data.runTime;
  }

  get formattedFinalPrice() {
    const price = this.finalPrice || 0;
    return 'R$ ' + price.toFixed(2).replace(/\./, ',');
  }

  get formattedDistance() {
    return '200m';
  }

  get formattedCurrentCredit() {
    return 'R$ ' + this.currentCredit.toFixed(2).replace(/\./, ',');
  }

  constructor(
    private storage: StorageService,
    private authentication: AuthenticationService,
  ) {}

  ngOnInit() {
    this.data = this.storage.get('rideEnd');

    this.currentCredit = this.authentication.loggedUser.credit;
    this.currentCredit -= this.finalPrice;

    this.authentication.loggedUser = {
      ...this.authentication.loggedUser,
      credit: this.currentCredit,
    };
  }

  calcPrice(timeInMinutes: number) {
    return Number((1 / 60 * timeInMinutes).toFixed(2));
  }
}
