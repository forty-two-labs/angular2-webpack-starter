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
import {ResetPassword} from './resetPassword';

describe('ResetPassword', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    ResetPassword,
    BaseRequestOptions,
    MockBackend,
    provide(Http, {
      useFactory: function(backend, defaultOptions) {
        return new Http(backend, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]})
  ]);

  it('should have a http', inject([ ResetPassword ], (resetPassword) => {
    expect(!!resetPassword.http).toEqual(true);
  }));

});
