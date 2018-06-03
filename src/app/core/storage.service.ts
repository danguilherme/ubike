import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  get(key: string);
  get<T>(key: string): T {
    return JSON.parse(window.localStorage.getItem(key));
  }

  set(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
}
