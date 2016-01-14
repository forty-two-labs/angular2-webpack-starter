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

  getMany(): Observable<Array<T>> {
    return this._apiClient.get(this._dataUrl)
      .map(res => {
        let jsonArray = <Array<any>>res.json();
        return jsonArray.map(json => new this._jsonNewFn(json))
      });
  }
}
