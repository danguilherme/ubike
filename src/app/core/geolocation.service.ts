import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  private watchId: number;
  private position$ = new BehaviorSubject<Position>(null);

  get currentPosition$() {
    return this.position$.asObservable().pipe(filter(x => !!x));
  }

  get hasSupport() {
    return 'geolocation' in navigator;
  }

  constructor() {
    this.startWatching();
  }

  /**
   * Start watching for location changes
   */
  startWatching() {
    if (!this.hasSupport) return;

    this.watchId = this.geolocation.watchPosition(pos =>
      this.onPositionUpdated(pos),
    );
  }

  /**
   * Stop watching for location changes
   */
  stopWatching() {
    if (!this.hasSupport || !this.watchId) return;

    this.geolocation.clearWatch(this.watchId);
  }

  private get geolocation() {
    return navigator.geolocation;
  }

  private onPositionUpdated(position: Position): void {
    this.position$.next(position);
  }
}
