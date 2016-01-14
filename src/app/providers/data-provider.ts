import {ApiClient} from '../services/api-client';
import {Observable} from 'rxjs/Observable';
import {JsonConstructable} from './interfaces';

export abstract class DataProvider<T> {

  constructor(
    protected _apiClient: ApiClient,
    protected _jsonNewFn: JsonConstructable<T>,
    protected _dataUrl: string) {
  }

  getOne(): Observable<T> {
    return this._apiClient.get(this._dataUrl)
      .map(res => new this._jsonNewFn(res.json()));
  }

  getMany(): Observable<T> {
    return this._apiClient.get(this._dataUrl)
      .flatMap(res => Observable.from(res.json()))
      .map(json => new this._jsonNewFn(json));
  }
}
