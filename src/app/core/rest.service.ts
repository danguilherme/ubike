import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { fetchNearBikes } from './rest.service.mock';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(http: HttpClient) {}

  /**
   *
   * @param distance distance in minutes
   */
  fetchNearBikes(distance: number) {
    return of(fetchNearBikes[distance]);
  }
}
