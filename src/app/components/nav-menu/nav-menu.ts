import {Component, View, Injectable} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {LabelData} from '../../providers/label-data';

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

  constructor(private _labelData: LabelData) {
    this.loadLabels();
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

  private loadLabels() {
    this._labelData.getLabelsOf('nav').subscribe(
      (data) => this.labels = data
    );
  }
}
