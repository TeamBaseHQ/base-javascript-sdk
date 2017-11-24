export default class BaseCollection<T> {
  data: T[];

  links: object;

  meta: object;

  constructor(responseData: any, type: { new (tData: any): T }) {
    const data = responseData.data ? responseData.data : false;

    if (data) {
      const collectionData = data.map((itemData: any) => {
        return BaseCollection.factory(type, itemData);
      });

      this.setData(collectionData)
        .setLinks(responseData.links)
        .setMeta(responseData.meta);
    }
  }

  /**
   * Set data.
   *
   * @param {T[]} data
   * @return {BaseCollection<T>}
   */
  public setData(data: T[]): BaseCollection<T> {
    this.data = data;
    return this;
  }

  /**
   * Get data.
   * @return {T[]}
   */
  public getData(): T[] {
    return this.data;
  }

  /**
   * Set links.
   *
   * @param {Object} links
   * @return {BaseCollection<T>}
   */
  public setLinks(links: object): BaseCollection<T> {
    this.links = links;
    return this;
  }

  /**
   * Get links.
   * @return {Object}
   */
  public getLinks(): object {
    return this.links;
  }

  /**
   * Set meta.
   *
   * @param {Object} meta
   * @return {BaseCollection<T>}
   */
  public setMeta(meta: object): BaseCollection<T> {
    this.meta = meta;
    return this;
  }

  /**
   * Get meta.
   * @return {Object}
   */
  public getMeta(): object {
    return this.meta;
  }

  /**
   * Model Factory.
   *
   * @param type
   * @param data
   * @return {T}
   */
  static factory<T>(type: { new (tData: any): T }, data: any): T {
    return new type(data);
  }
}
