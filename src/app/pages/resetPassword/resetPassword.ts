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
  styles: [ require('./resetPassword.scss') ],
  template: require('./resetPassword.html')
})
export class ResetPassword {
  public labels: LabelMapType = {};
  public resetPasswordForm: ControlGroup;
  public password: Control = new Control('', Validators.required);

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

    if (this.resetPasswordForm.valid) {
      this._doResetPassword();
    }
  }

  private _loadLabels() {
    this._labelData.getLabelsOf('resetPassword').subscribe(
      (data) => this.labels = data
    );
  }

  private _setupForm() {
    this.resetPasswordForm = this._formBuilder.group({
      password: this.password
    });
  }

  private _doResetPassword() {
    console.log('doResetPassword', this.password.value);
    this._router.navigate(['/Home']);
  }
}
