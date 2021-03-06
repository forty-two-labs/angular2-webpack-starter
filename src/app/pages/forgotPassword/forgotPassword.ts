import {Component} from 'angular2/core';
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';

import {LabelData} from '../../providers/label-data';
import {LabelMapType} from '../../models/interfaces';

@Component({
  providers: [],
  directives: [
    ...FORM_DIRECTIVES,
    ...ROUTER_DIRECTIVES
  ],
  pipes: [ ],
  styles: [ require('./forgotPassword.scss') ],
  template: require('./forgotPassword.html')
})
export class ForgotPassword {
  public labels: LabelMapType = {};
  public forgotPasswordForm: ControlGroup;
  public email: Control = new Control('', Validators.required);

  constructor(
    private _labelData: LabelData,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {
    this._loadLabels();
    this._setupForm();
  }

  ngOnInit() {
  }

  onSubmit(event) {
    event.preventDefault();

    if (this.forgotPasswordForm.valid) {
      this._doForgotPassword();
    }
  }

  private _loadLabels() {
    this._labelData.getLabelsOf('forgotPassword').subscribe(
      (data) => this.labels = data
    );
  }

  private _setupForm() {
    this.forgotPasswordForm = this._formBuilder.group({
      email: this.email
    });
  }

  private _doForgotPassword() {
    console.log('doForgotPassword', this.email.value);
    this._router.navigate(['/ResetPassword']);
  }
}
