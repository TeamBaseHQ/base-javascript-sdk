export default class BaseCollection<T> {
    data: T[];
    links: object;
    meta: object;
    constructor(data: T[], links?: object, meta?: object);
    setData(data: T[]): BaseCollection<T>;
    getData(): T[];
    setLinks(links: object): BaseCollection<T>;
    getLinks(): object;
    setMeta(meta: object): BaseCollection<T>;
    getMeta(): object;
    static factory<T>(type: {
        new (tData: any): T;
    }, data: any): T;
}
