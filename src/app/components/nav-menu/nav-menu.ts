import {Component, View, Injectable} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';

import {LabelData} from '../../providers/label-data';
import {UserData} from '../../providers/user-data';

import {RouterActive} from '../../directives/router-active';
import {log} from '../../decorators/log';

@Injectable()

@Component({
  selector: 'nav-menu'
})
@View({
  template: require('./nav-menu.html'),
  directives: [...ROUTER_DIRECTIVES, RouterActive]
})

export class NavMenu {
  public labels: any = {};
  public categories: Array<any> = [];
  public hasLoggedIn: boolean = false;
  private _loginStatusSubscription: any;

  constructor(private _labelData: LabelData, private _userData: UserData, private _router: Router) {
    this._loadLabels();
    this._listenToLoginStatusChange();
  }

  @log
  ngOnInit() {
    $('.ui.search')
      .search({
        source: [],
        minCharacters: 2,
        searchFields: [
          'title',
          'description'
        ]
      })
    ;
  }

  @log
  ngOnDestroy() {
    this._loginStatusSubscription.unsubscribe();
  }

  doLogout() {
    this._userData.logout();
    this._router.navigate(['/Login']);
  }

  private _loadLabels() {
    this._labelData.getLabelsOf('nav').subscribe(
      (data) => this.labels = data
    );
  }

  private _listenToLoginStatusChange() {
    this.hasLoggedIn = this._userData.hasLoggedIn();

    this._loginStatusSubscription = this._userData.getLoginStatusChangeEmitter().subscribe((hasLoggedIn) => {
      this.hasLoggedIn = hasLoggedIn;
    });
  }
}
