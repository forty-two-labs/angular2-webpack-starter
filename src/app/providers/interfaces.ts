// TODO restrict json type from any
export interface ConstructFromJson {
  json: any;
}

export interface JsonConstructable<T> {
  new(json: any): T;
}
