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
import {ForgotPassword} from './forgotPassword';

describe('ForgotPassword', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    ForgotPassword,
    BaseRequestOptions,
    MockBackend,
    provide(Http, {
      useFactory: function(backend, defaultOptions) {
        return new Http(backend, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]})
  ]);

  it('should have a http', inject([ ForgotPassword ], (forgotPassword) => {
    expect(!!forgotPassword.http).toEqual(true);
  }));

});
