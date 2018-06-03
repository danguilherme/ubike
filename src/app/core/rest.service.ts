import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { fetchNearDocks, startRide, endRide } from './rest.service.mock';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  readonly host = 'https://ubike.azurewebsites.net/api/v1';
  // readonly host = 'https://ubikehackuber.herokuapp.com/api/v1/';
  constructor(private http: HttpClient) {}

  /**
   *
   * @param distance distance in minutes
   */
  fetchNearDocks({ lat, lng }: { lat: number; lng: number }, distance: number) {
    return this.http
      .get(`${this.host}/docklessByDistancie/${lat}|${lng}/${distance}`)
      .pipe(map((r: any) => r.data));
  }

  /**
   */
  startRide(userId: number, dockId: number) {
    return this.http
      .post(`${this.host}/startRun`, {
        userId,
        docklessId: dockId,
      })
      .pipe(map((r: any) => r.data));
  }

  endRide(userId: number, dockId: number): any {
    return this.http
      .post(`${this.host}/startRun`, {
        userId,
        docklessId: dockId,
      })
      .pipe(map((r: any) => r.data));
  }
}
