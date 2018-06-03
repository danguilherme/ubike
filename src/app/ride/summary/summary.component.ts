import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/authentication.service';

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

  constructor(private authentication: AuthenticationService) {}

  ngOnInit() {
    this.currentCredit = this.authentication.getLoggedUser().credit;
    this.currentCredit -= this.finalPrice;
  }

  calcPrice(timeInMinutes: number) {
    return Number((1 / 60 * timeInMinutes).toFixed(2));
  }
}
