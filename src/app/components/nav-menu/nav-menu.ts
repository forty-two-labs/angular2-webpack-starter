import {Component, View, Injectable} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
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
  constructor() {
  }

  @log
  ngOnInit() {
  }
}
