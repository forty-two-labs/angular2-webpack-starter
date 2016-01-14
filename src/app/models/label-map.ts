import {BaseModel, LabelMapType} from './interfaces';

export class LabelMap implements BaseModel {

  public data: LabelMapType = {};

  constructor(public json: any) {
    this.data = json;
  }
}
