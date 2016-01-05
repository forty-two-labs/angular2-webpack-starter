import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Http} from 'angular2/http';

@Component({
  selector: 'home',
  providers: [],
  directives: [
    ...FORM_DIRECTIVES
  ],
  pipes: [ ],
  styles: [ require('./home.scss') ],
  template: require('./home.html')
})
export class Home {
  constructor(public http: Http) {
  }

  ngOnInit() {
  }
}
