import {Injectable} from 'angular2/core';
import {ApiClient} from '../services/api-client';
import {DataProvider} from './data-provider';
import {LabelMap} from '../models/label-map';
import {LabelMapType} from '../models/interfaces';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LabelData extends DataProvider<LabelMap> {
  data: any;

  constructor(protected _apiClient: ApiClient) {
    super(_apiClient, LabelMap, './assets/data/labels.json');
  }

  getLabelsOf(key: string): Observable<LabelMapType> {
    return this.getOne().map(m => m.data[key]);
  }
}
