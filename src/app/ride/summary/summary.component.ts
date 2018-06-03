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

  get finalPrice() {
    return this.calcPrice(this.time);
  }

  get formattedTime() {
    return this.time + ' minutos';
  }

  get formattedFinalPrice() {
    return 'R$ ' + this.finalPrice.toFixed(2).replace(/\./, ',');
  }

  get formattedDistance() {
    return '5.2km';
  }

  get formattedCurrentCredit() {
    return 'R$ ' + this.currentCredit.toFixed(2).replace(/\./, ',');
  }

  constructor(
    private storage: StorageService,
    private authentication: AuthenticationService,
  ) {}

  ngOnInit() {
    const data = this.storage.get('rideEnd');

    this.currentCredit = this.authentication.getLoggedUser().credit;
    this.currentCredit -= this.finalPrice;
  }

  calcPrice(timeInMinutes: number) {
    return Number((1 / 60 * timeInMinutes).toFixed(2));
  }
}
