import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { fetchNearDocks, startRide, endRide } from './rest.service.mock';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(http: HttpClient) {}

  /**
   *
   * @param distance distance in minutes
   */
  fetchNearDocks(distance: number) {
    return of(fetchNearDocks[distance]);
  }

  /**
   *
   * @param distance distance in minutes
   */
  startRide(userId: number, dockId: number) {
    return of(startRide[`${userId},${dockId}}`]);
  }

  endRide(userId: number, dockId: number): any {
    return of(endRide[`${userId},${dockId}}`]);
  }
}
