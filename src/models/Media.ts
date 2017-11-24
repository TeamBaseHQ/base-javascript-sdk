import BaseModel from './BaseModel';

export default class Media extends BaseModel {

  collection_name: string;

  name: string;

  file_name: string;

  mime_type: string;

  size: number;

  manipulations: any;

  custom_properties: any;

  url: object;


  getCollection_name(): string {
    return this.collection_name;
  }

  setCollection_name(value: string) {
    this.collection_name = value;
  }

  getName(): string {
    return this.name;
  }

  setName(value: string) {
    this.name = value;
  }

  getFile_name(): string {
    return this.file_name;
  }

  setFile_name(value: string) {
    this.file_name = value;
  }

  getMime_type(): string {
    return this.mime_type;
  }

  setMime_type(value: string) {
    this.mime_type = value;
  }

  getSize(): number {
    return this.size;
  }

  setSize(value: number) {
    this.size = value;
  }

  getManipulations(): any {
    return this.manipulations;
  }

  setManipulations(value: any) {
    this.manipulations = value;
  }

  getCustom_properties(): any {
    return this.custom_properties;
  }

  setCustom_properties(value: any) {
    this.custom_properties = value;
  }

  getUrl(size?: string): Object {
    if (size) {
      return this.url[size];
    }
    return this.url;
  }

  setUrl(value: Object) {
    this.url = value;
  }

  constructor(data: any) {
    if (data) {
      super(data);
      this.collection_name = data.collection_name;
      this.name = data.name;
      this.file_name = data.file_name;
      this.mime_type = data.mime_type;
      this.size = data.size;
      this.manipulations = data.manipulations;
      this.custom_properties = data.custom_properties;
      this.url = data.url;
    }
  }
}
