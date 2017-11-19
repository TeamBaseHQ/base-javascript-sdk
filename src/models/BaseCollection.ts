export default class BaseCollection<T> {

  constructor(public data: T[], public links?: object, public meta?: object) {
    //
  }

  public setData(data: T[]): BaseCollection<T> {
    this.data = data;
    return this;
  }

  public getData(): T[] {
    return this.data;
  }

  public setLinks(links: object): BaseCollection<T> {
    this.links = links;
    return this;
  }

  public getLinks(): object {
    return this.links;
  }

  public setMeta(meta: object): BaseCollection<T> {
    this.meta = meta;
    return this;
  }

  public getMeta(): object {
    return this.meta;
  }

  static factory<T>(type: { new (tData: any): T }, data: any): T {
    return new type(data);
  }
}
