import {Injectable, Injector} from 'angular2/core';
import {
  Http,
  Request,
  RequestOptions,
  RequestOptionsArgs,
  RequestMethod,
  Response
} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

// TODO base url
// TODO CORS
// TODO auth token
// TODO HTTP error handling

@Injectable()
export class ApiClient {

  constructor(private http: Http) {
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.buildRequest({ url: url, method: RequestMethod.Get }, options);
  }

  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.buildRequest({ url: url, body: body, method: RequestMethod.Post }, options);
  }

  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.buildRequest({ url: url, body: body, method: RequestMethod.Put }, options);
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.buildRequest({ url: url, method: RequestMethod.Delete }, options);
  }

  patch(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.buildRequest({ url: url, body: body, method: RequestMethod.Patch }, options);
  }

  head(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.buildRequest({ url: url, method: RequestMethod.Head }, options);
  }

  private buildRequest(
    requestArgs: RequestOptionsArgs,
    additionalOptions: RequestOptionsArgs
  ): Observable<Response> {
    let options = new RequestOptions(requestArgs);

    if (additionalOptions) {
      options = options.merge(additionalOptions);
    }

    return this.http.request(new Request(options));
  }
}
