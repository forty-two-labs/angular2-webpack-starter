import {Component} from 'angular2/core';
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';
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
  public resetPasswordForm: ControlGroup;
  public password: Control = new Control("", Validators.required);

  constructor(private _labelData: LabelData, private _formBuilder: FormBuilder) {
    this._loadLabels();
    this._setupForm();
  }

  ngOnInit() {
  }

  onSubmit(event) {
    event.preventDefault();

    if (this.resetPasswordForm.valid) {
      this._doResetPassword();
    }
  }

  private _loadLabels() {
    this._labelData.getResetPasswordLabels().then((data) => {
      this.labels = data;
    });
  }

  private _setupForm() {
    this.resetPasswordForm = this._formBuilder.group({
      password: this.password
    });
  }

  private _doResetPassword() {
    console.log('doResetPassword', this.password.value);
  }
}
