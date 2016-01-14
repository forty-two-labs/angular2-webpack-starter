import {Component} from 'angular2/core';
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';

import {LabelData} from '../../providers/label-data';
import {UserData} from '../../providers/user-data';


@Component({
  providers: [],
  directives: [
    ...FORM_DIRECTIVES,
    ...ROUTER_DIRECTIVES
  ],
  pipes: [ ],
  styles: [ require('./login.scss') ],
  template: require('./login.html')
})
export class Login {
  public labels: any = {};
  public loginForm: ControlGroup;
  public email: Control = new Control('', Validators.required);
  public password: Control = new Control('', Validators.required);

  constructor(private _labelData: LabelData, private _userData: UserData, private _formBuilder: FormBuilder, private _router: Router) {
    this._loadLabels();
    this._setupForm();
  }

  ngOnInit() {
  }

  onSubmit(event) {
    event.preventDefault();

    if (this.loginForm.valid) {
      this._doLogin();
    }
  }

  private _loadLabels() {
    this._labelData.getLoginLabels().then((data) => {
      this.labels = data;
    });
  }

  private _setupForm() {
    this.loginForm = this._formBuilder.group({
      email: this.email,
      password: this.password
    });
  }

  private _doLogin() {
    this._userData.login(this.email.value, this.password.value).then((result) => {
      if (result) {
        this._router.navigate(['/Home']);
      } else {
        console.log('failed to login');
      }
    });
  }
}
