import {Component, View, Injectable} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {RouterActive} from '../../directives/router-active';

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
  ngOnInit() {
    console.log('hello Nav Menu component');
  }

}