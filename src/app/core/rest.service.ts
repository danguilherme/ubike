import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';

import { map, catchError } from 'rxjs/operators';
import { Dock } from './models/dock';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  // readonly host = 'https://ubike.azurewebsites.net/api/v1';
  readonly host = 'https://ubikehackuber.herokuapp.com/api/v1';
  constructor(private http: HttpClient) {}

  /**
   *
   * @param distance distance in minutes
   */
  fetchNearDocks({ lat, lng }: { lat: number; lng: number }, distance: number) {
    const f = v => v.toFixed(5);
    return this.http
      .get(`${this.host}/docklessByDistancie/${f(lat)},${f(lng)}/${distance}`)
      .pipe(
        map((r: any) => r.data.filter(x => !!x).map(this.normalizeDock)),
        catchError(e => {
          console.log('deu ruim', e);
          return of(null);
        }),
      );
  }

  /**
   */
  startRide(userId: number, dockId: number) {
    const body = new URLSearchParams();
    body.set('userId', String(userId));
    body.set('dockelessId', String(dockId));

    return this.http
      .post(`${this.host}/startRun`, body.toString(), {
        headers: new HttpHeaders().set(
          'Content-Type',
          'application/x-www-form-urlencoded',
        ),
      })
      .pipe(map((r: any) => r.data));
  }

  endRide(userId: number, dockId: number): any {
    const body = new URLSearchParams();
    body.set('userId', String(userId));
    body.set('docklessId', String(dockId));

    return this.http
      .post(`${this.host}/finishedRun`, body.toString(), {
        headers: new HttpHeaders().set(
          'Content-Type',
          'application/x-www-form-urlencoded',
        ),
      })
      .pipe(map((r: any) => r.data[0]));
  }

  private normalizeDock(dock: any): Dock {
    return {
      address: dock.address,
      availableBikes: Number(dock.bikes_available),
      estimateTime: dock.estimateTime,
      id: 2,
      lat: Number(dock.latitude),
      lng: Number(dock.longitude),
      name: dock.name,
    };
  }
}

export interface ApiResponse {
  status: number;
  message: string;
  data: any;
}
