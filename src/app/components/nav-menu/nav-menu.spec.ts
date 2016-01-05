import {
  it,
  inject,
  injectAsync,
  describe,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

import {Component, provide} from 'angular2/core';
import {BaseRequestOptions, Http} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';

// Load the implementations that should be tested
import {NavMenu} from './nav-menu';

describe('nav-menu directive', () => {
  // Create a test component to test directives
  @Component({
    template: '',
    directives: [ NavMenu ]
  })
  class TestComponent {}

});
