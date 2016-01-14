import {ConstructFromJson} from '../providers/interfaces'

export interface BaseModel extends ConstructFromJson {
}

export interface LabelMapType {
  [key: string]: string | LabelMapType;
}