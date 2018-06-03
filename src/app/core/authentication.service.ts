import { Injectable } from '@angular/core';
import { User } from './models/user';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private storage: StorageService) {}

  isLoggedIn() {
    return true;
  }

  set loggedUser(val: User) {
    this.storage.set('loggedUser', val);
  }

  get loggedUser(): User {
    let user = this.storage.get('loggedUser');
    if (user) return user;

    user = {
      id: 1,
      name: 'Robson da Silva Sauro',
      credit: 25,
    };

    this.storage.set('loggedUser', user);
  }
}
