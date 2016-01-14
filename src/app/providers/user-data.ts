import {Injectable, EventEmitter} from 'angular2/core';


@Injectable()
export class UserData {
  public loginStatusChange: EventEmitter<boolean> = new EventEmitter();
  private HAS_LOGGED_IN: string = 'hasLoggedIn';

  constructor() {
  }

  getLoginStatusChangeEmitter() {
    return this.loginStatusChange;
  }

  login(username, password) {
    if (this.hasLoggedIn()) {
      return Promise.resolve(true);
    }

    // TODO auth with server backend
    return new Promise(resolve => {
      localStorage.setItem(this.HAS_LOGGED_IN, 'true');
      this.loginStatusChange.emit(true);

      resolve(true);
    });
  }

  signup(username, password) {
    if (this.hasLoggedIn()) {
      return Promise.resolve(true);
    }

    // TODO register with server backend
    return new Promise(resolve => {
      localStorage.setItem(this.HAS_LOGGED_IN, 'true');
      this.loginStatusChange.emit(true);

      resolve(true);
    });
  }

  logout() {
    localStorage.removeItem(this.HAS_LOGGED_IN);
    this.loginStatusChange.emit(false);
  }

  hasLoggedIn() {
    return localStorage.getItem(this.HAS_LOGGED_IN) === 'true';
  }
}
