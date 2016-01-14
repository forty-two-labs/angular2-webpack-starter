import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {LabelData} from '../../providers/label-data';


@Component({
  providers: [],
  directives: [
    ...FORM_DIRECTIVES,
    ...ROUTER_DIRECTIVES
  ],
  pipes: [ ],
  styles: [ require('./resetPassword.scss') ],
  template: require('./resetPassword.html')
})
export class ResetPassword {
  public labels: any = {};

  constructor(private _labelData: LabelData) {
    this.loadLabels();
  }

  ngOnInit() {
  }

  private loadLabels() {
    this._labelData.getResetPasswordLabels().then((data) => {
      this.labels = data;
    });
  }
}
