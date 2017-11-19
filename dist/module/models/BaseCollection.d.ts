export default class BaseCollection<T> {
    data: T[];
    links: object;
    meta: object;
    constructor(responseData: any, type: {
        new (tData: any): T;
    });
    /**
     * Set data.
     *
     * @param {T[]} data
     * @return {BaseCollection<T>}
     */
    setData(data: T[]): BaseCollection<T>;
    /**
     * Get data.
     * @return {T[]}
     */
    getData(): T[];
    /**
     * Set links.
     *
     * @param {Object} links
     * @return {BaseCollection<T>}
     */
    setLinks(links: object): BaseCollection<T>;
    /**
     * Get links.
     * @return {Object}
     */
    getLinks(): object;
    /**
     * Set meta.
     *
     * @param {Object} meta
     * @return {BaseCollection<T>}
     */
    setMeta(meta: object): BaseCollection<T>;
    /**
     * Get meta.
     * @return {Object}
     */
    getMeta(): object;
    /**
     * Model Factory.
     *
     * @param type
     * @param data
     * @return {T}
     */
    static factory<T>(type: {
        new (tData: any): T;
    }, data: any): T;
}
