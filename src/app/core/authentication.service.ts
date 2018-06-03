import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  isLoggedIn() {
    return true;
  }

  getLoggedUser(): User {
    return {
      id: 1,
      name: 'Robson da Silva Sauro',
      credit: 25,
    };
  }
}
