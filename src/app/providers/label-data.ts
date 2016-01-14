import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';


@Injectable()
export class LabelData {
  data: any;

  constructor(public http: Http) {
    this.http = http;
  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('assets/data/labels.json').subscribe(res => {
        this.data = this.processData(res.json());
        resolve(this.data);
      });
    });
  }

  processData(data) {
    return data;
  }

  getNavLabels() {
    return this.load().then(data => {
      return data.nav;
    });
  }

  getLoginLabels() {
    return this.load().then(data => {
      return data.login;
    });
  }

  getRegisterLabels() {
    return this.load().then(data => {
      return data.register;
    });
  }

  getForgotPasswordLabels() {
    return this.load().then(data => {
      return data.forgotPassword;
    });
  }

  getResetPasswordLabels() {
    return this.load().then(data => {
      return data.resetPassword;
    });
  }

}
